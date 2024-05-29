<template>
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
      <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
      <style>
        body {
          margin: 0;
          height: 100%;
          overflow: hidden;
          background-color: #000;
        }
        a-box {
          color: #000000;
        }
      </style>
    </head>
    <body>
      <a-scene embedded arjs="sourceType: webcam; sourceWidth: 640; sourceHeight: 480;" style="position: fixed; z-index: 2000; width: 100%; height: 100%;">
        <a-assets>
            <img id='textura' src='./imagen/door_2.jpg'>
        </a-assets>
        <a-marker preset="hiro" position="0 0 0">
          <!-- Ajusta la posición y el tamaño del cuadro -->
          <a-box src='#textura' animation="property: rotation; to: 0 360 0; loop: true; dur: 5000;"></a-box>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </body>
  </html>
</template>

<style scoped>
body {
  background-color: #000;
}

a-box {
  color: #000000;
}
</style>