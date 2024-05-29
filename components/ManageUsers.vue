<template>
    <div class="background-container">
      <div class="card">
        <h1>Gestionar Usuarios</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre de Usuario</th>
              <th>Email</th>
              <th>Contraseña</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>
                <input v-model="user.username" :disabled="!user.editing" />
              </td>
              <td>
                <input v-model="user.email" :disabled="!user.editing" />
              </td>
              <td>
                <input v-model="user.password" :disabled="!user.editing" type="password" />
              </td>
              <td class="actions">
                <button v-if="!user.editing" @click="enableEditing(user)">
                  <i class="fas fa-edit"></i>Editar
                </button>
                <button v-else @click="updateUser(user)">
                  <i class="fas fa-save"></i>Guardar
                </button>
                <button @click="deleteUser(user.id)">
                  <i class="fas fa-trash"></i>Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ManageUsers',
    data() {
      return {
        users: []
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('/manage-users');
          this.users = response.data.map(user => ({
            ...user,
            editing: false
          }));
        } catch (error) {
          console.error('Error al obtener los usuarios:', error);
        }
      },
      enableEditing(user) {
        user.editing = true;
      },
      async updateUser(user) {
        if (confirm('¿Estás seguro de que deseas actualizar este usuario?')) {
          try {
            await axios.put(`/manage-users/${user.id}`, {
              username: user.username,
              email: user.email,
              password: user.password
            });
            user.editing = false;
            alert('Usuario actualizado con éxito');
          } catch (error) {
            console.error('Error al actualizar el usuario:', error);
          }
        }
      },
      async deleteUser(id) {
        if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
          try {
            await axios.delete(`/manage-users/${id}`);
            this.users = this.users.filter(user => user.id !== id);
          } catch (error) {
            console.error('Error al eliminar el usuario:', error);
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos CSS para la página de gestión de usuarios */
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
    background-image: url('C:/Users/kevin/Videos/Proyecto/Proyecto/image2.png'); /* Ruta de la imagen de fondo */
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
    max-width: 800px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.8); /* Fondo semitransparente */
    z-index: 1;
  }
  
  .card h1 {
    text-align: center;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  td input {
    width: 100%;
    padding: 8px;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  td input[disabled] {
    background-color: #f9f9f9;
  }
  
  .actions {
    display: flex;
    gap: 5px;
  }
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  button + button {
    background-color: #ff4c4c;
  }
  
  button + button:hover {
    background-color: #ff1a1a;
  }
  
  button i {
    margin-right: 5px;
  }
  </style>
  