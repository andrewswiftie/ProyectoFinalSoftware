const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3000;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'escoba',
    database: 'ferroar',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Por favor, complete todos los campos.' });
    }

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);

        if (rows.length > 0) {
            if (rows.some(row => row.username === username && row.email === email)) {
                return res.status(400).json({ error: 'El nombre de usuario y el correo ya existen.' });
            } else if (rows.some(row => row.username === username)) {
                return res.status(400).json({ error: 'El nombre de usuario ya existe.' });
            } else if (rows.some(row => row.email === email)) {
                return res.status(400).json({ error: 'El correo electrónico ya existe.' });
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
        return res.json({ message: '¡Registro exitoso!' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Por favor, complete todos los campos.' });
    }

    // Verificar si es el administrador
    if (username === 'admin' && password === 'adminpassword') {
        return res.json({ message: 'Inicio de sesión del administrador exitoso.', user: { username, email: 'admin@example.com', isAdmin: true } });
    }

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

        if (rows.length > 0) {
            const user = rows[0];
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return res.json({ message: 'Inicio de sesión exitoso.', user: { username: user.username, email: user.email, isAdmin: false } });
            } else {
                return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos.' });
            }
        } else {
            return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos.' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.post('/reset-password', async (req, res) => {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({ error: 'Por favor, complete todos los campos.' });
    }

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(400).json({ error: 'El correo electrónico no existe.' });
        } else {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await pool.query('UPDATE users SET password = ? WHERE email = ?', [hashedPassword, email]);
            return res.json({ message: 'Contraseña restablecida con éxito.' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.get('/manage-users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.delete('/manage-users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
        res.json({ message: 'Usuario eliminado con éxito.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.put('/manage-users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Por favor, complete todos los campos.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, hashedPassword, id]);
        res.json({ message: 'Usuario actualizado con éxito.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

const server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app);

server.listen(port, () => {
    console.log(`Servidor HTTPS iniciado en el puerto ${port}`);
});
