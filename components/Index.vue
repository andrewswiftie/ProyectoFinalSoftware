<template>
  <div class="index-page">
    <!-- Contenido de la página principal aquí -->
    <div class="background-container">
      <div class="center-content">
        <h1 class="title">Explora el Parque con FerroAR</h1>
        <p class="description">
          Bienvenido a FerroAR, una experiencia única que combina la rica historia de nuestro parque con la innovadora tecnología de Realidad Aumentada (AR). Descubre lugares emblemáticos y sumérgete en su fascinante pasado a través de animaciones interactivas y narrativas, diseñadas para enriquecer tu visita.
        </p>
        <img src="./ar2.jpg" alt="AR" class="additional-image2">
        <p class="description">
          La Realidad Aumentada (AR) nos permite superponer información visual sobre el mundo real, brindando una nueva dimensión a la experiencia del visitante. Con FerroAR, puedes apuntar tu dispositivo hacia puntos de interés específicos y desbloquear una variedad de contenido multimedia, desde recreaciones históricas hasta emocionantes relatos de antaño.
        </p>
        <!-- Espacio para una imagen adicional -->
        <img src="./arphoto.jpg" alt="AR" class="additional-image">
        <p class="description">
          Características de FerroAR:
          <ul>
            <li>Explora la fusión entre el mundo real y el virtual.</li>
            <li>Descubre la historia enriquecida de nuestro parque a través de animaciones interactivas.</li>
            <li>Vive una experiencia de visita guiada única e inmersiva.</li>
            <li>Disfruta de narrativas envolventes que cobran vida ante tus ojos.</li>
          </ul>
        </p>
        <button class="ar-button" @click="navigateToARPage">¡Explora con FerroAR!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToARPage() {
      this.$router.push('/ar');
    }
  }
}
</script>

<style scoped>
/* Estilos generales */
body {
  margin: 0;
  padding: 0;
}

.index-page {
  margin-top: 60px;
  margin-bottom: 40px;
}

.background-container {
  position: static;
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
}

.background-container::after {
  content: "";
  background-image: url('https://i.pinimg.com/564x/eb/a8/21/eba82151e07954e6dbab2e336542eb0d.jpg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  z-index: -1;
}

.center-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: rgba(69, 65, 65, 0.5);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
}

/* Estilos para los textos */
.title {
  font-size: 2em;
  text-align: center;
  font-family: fantasy;
  
  margin-bottom: 20px;
}

.description {
  text-align: justify;
  font-family: 'Arial', sans-serif;
  font-size: 1.1em;
  color: #fff;
}

ul {
  list-style-type: disc;
  text-align: left;
  padding-left: 20px;
}

/* Estilos para el botón */
.ar-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #59499b;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 6px rgba(96, 87, 87, 0.1);
}

.ar-button:hover {
  background-color: #7f6fc0;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

/* Estilos para imágenes adicionales */
.additional-image {
  max-width: 60%;
  margin-top: 20px;
  border-radius: 10px;
}

.additional-image2 {
  max-width: 60%;
  margin-top: 20px;
  border-radius: 10px;
}

/* Estilos adaptativos para dispositivos móviles */
@media (max-width: 768px) {
  .center-content {
    padding: 15px;
  }

  .title {
    font-size: 1.3em;
  
  }

  .description {
    font-size: 1em;
  }

  .ar-button {
    font-size: 1em;
  }
}
</style>