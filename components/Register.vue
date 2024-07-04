<template>
    <div class="background-container">
        <div class="card">
            <h1>Registro</h1>
            <form @submit.prevent="registerUser">
                <label for="username">Nombreeee de usuario:</label>
                <input type="text" id="username" v-model="username" required><br><br>
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" v-model="email" required><br><br>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password" required><br><br>
                <input type="submit" value="Registrarse">
            </form>
            <p>¿Ya tienes una cuenta? <router-link to="/login">Iniciar sesión</router-link></p>
    
            <!-- Mostrar mensaje de éxito -->
            <div v-if="successMessage" class="success-message">
                {{ successMessage }}
            </div>
    
            <!-- Mostrar mensaje de error -->
            <div v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    registerUser() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then(errorData => {
            throw new Error(errorData.error);
          });
        }
      })
      .then(data => {
        this.successMessage = 'Registro exitoso. Redirigiendo...';
        Swal.fire({
          title: 'Éxito',
          text: 'Registro exitoso',
          icon: 'success',
          confirmButtonText: 'Ir a la página principal'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/';  // Redirige a la página principal
          }
        });
        this.username = '';
        this.email = '';
        this.password = '';
      })
      .catch(error => {
        this.errorMessage = error.message;
        Swal.fire({
          title: 'Error',
          text: this.errorMessage,
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });
      });
    }
  }
}
</script>
  
<style scoped>
/* Estilos CSS para la página de registro */
body {
    margin: 0;
    padding: 0;
}

.background-container {
    position: static;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.background-container::after {
    content: "";
    background-image: url('C:\Users\kevin\Videos\Proyecto\Proyecto\image2.png'); /* Ruta de la imagen de fondo */
    background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
    background-position: center; /* Centra la imagen */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px); /* Ajusta el valor para cambiar la intensidad del desenfoque */
    z-index: -1; /* Asegura que la imagen esté detrás del contenido */
}

.card {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.8); /* Fondo semitransparente */
}

.card h1 {
    text-align: center;
}

.card form {
    margin-top: 20px;
}

.card label {
    display: block;
    margin-bottom: 10px;
}

.card input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.card input[type="submit"] {
    background-color: #59499b;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.card input[type="submit"]:hover {
    background-color: #7f6fc0;
}

/* Estilos para los mensajes de éxito y error */
.success-message {
    color: green;
    margin-top: 10px;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>
