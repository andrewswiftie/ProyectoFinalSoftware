<template>
  <div id="app">
    <header v-if="$route.path !== '/ar'">
      <router-link to="/" class="home-link">
        <h1 class="title">FerroAR</h1>
      </router-link>
      <nav>
        <div class="nav-buttons">
          <router-link v-if="!isAuthenticated" to="/login" class="btn">Iniciar Sesión</router-link>
          <router-link v-if="!isAuthenticated" to="/register" class="btn">Registrarse</router-link>
          <div v-if="isAuthenticated" class="user-info">
            <span>Bienvenido, {{ currentUser.username }}</span>
            <button @click="logout" class="btn">Cerrar Sesión</button>
            <router-link v-if="isAdmin" to="/manage-users" class="btn">Gestionar Usuarios</router-link>
          </div>
          <router-link to="/maps" class="btn">Mapas</router-link>
        </div>
      </nav>
    </header>
    
    <main>
      <router-view></router-view>
    </main>
    
    <footer>
      <p>© 2024 FerroAR</p>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated', 'currentUser', 'isAdmin'])
  },
  methods: {
    ...mapActions(['logoutUser']),
    logout() {
      this.logoutUser();
      this.$router.push('/');
    }
  }
}
</script>

<style>
/* Estilos globales de la aplicación */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #292929;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Asegura que el encabezado esté por encima de otros elementos */
}

header h1 {
  margin: 0;
}

nav {
  display: flex;
  gap: 11px; /* Espaciado entre los botones de navegación */
}

.home-link {
  text-decoration: none;
  color: inherit;
}

.nav-buttons {
  display: flex;
  align-items: center;
}

.nav-buttons .btn {
  margin-left: 10px;
}

.btn {
  background-color: #59499b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  background-color: #7f6fc0;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

main {
  padding: 20px;
  margin-top: 60px; /* Desplaza el contenido principal hacia abajo para evitar que quede debajo del encabezado */
  margin-bottom: 40px; /* Desplaza el contenido principal hacia arriba para evitar que quede debajo del pie de página */
  overflow-y: auto; /* Permite el desplazamiento vertical */
}

footer {
  background-color: #292929;
  color: #fff;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  padding: 6px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Asegura que el pie de página esté por encima de otros elementos */
}
.title {
  font-family: 'Courier New', Courier, monospace; /* Cambia 'Courier New' por la fuente que desees */
  font-weight: lighter;
}
</style>
