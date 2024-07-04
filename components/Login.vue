<template>
  <div class="background-container">
    <div class="card">
      <h1>Iniciar sesión</h1>
      <form @submit.prevent="loginUser">
        <label for="username">Nombre de usuario:</label>
        <input type="texti" id="username" v-model="username" required><br><br>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required><br><br>
        <input type="submit" value="Iniciar sesión">
      </form>
      <p>¿No tienes una cuenta? <router-link to="/register">Registrarse</router-link></p>
      <p>¿Olvidaste tu contraseña? <router-link to="/reset-password">Recuperar contraseña</router-link></p>

      <div v-if="successMessage" class="result-message success-message">
        {{ successMessage }}
      </div>

      <div v-if="errorMessage" class="result-message error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions(['loginUser']),
    loginUser() {
      const userData = {
        username: this.username,
        password: this.password
      };

      if (!userData.username || !userData.password) {
        this.errorMessage = 'Por favor, complete todos los campos.';
        return;
      }

      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => { throw new Error(err.error); });
        }
        return response.json();
      })
      .then(data => {
        this.$store.dispatch('loginUser', data.user);
        Swal.fire({
          title: 'Éxito',
          text: 'Inicio de sesión exitoso',
          icon: 'success',
          confirmButtonText: 'Ir a la página principal'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push('/');
          }
        });
        this.username = '';
        this.password = '';
      })
      .catch(error => {
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });
        this.errorMessage = error.message;
      });
    }
  }
}
</script>

<style scoped>
/* Estilos CSS para la página de inicio */
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
.result-message {
    color: white;
    padding: 10px;
    border-radius: 5px;
}

.success-message {
    color: green;
    margin-top: 10px;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>
