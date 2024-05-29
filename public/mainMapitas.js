window.initMap = function(){
    const coordsCompu = {lat: 32.63171422343683, lng: -115.44472587855753};
    const coordsElectrica = {lat: 32.63125408519523, lng: -115.4441452584255};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 20,
        center: coordsCompu,
    });




    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition, showError);
        } else {
            console.log("La geolocalización no es compatible con este navegador.");
        }
    }


    // Función para mostrar la posición del usuario en el mapa
    function showPosition(position) {
        console.log("Ubicación del usuario obtenida correctamente:", position.coords.latitude, position.coords.longitude);
        const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        const userMarker = new google.maps.Marker({
            position: userLocation,
            map: map,
            title: "Tu ubicación actual"
        });
        map.setCenter(userLocation);
    }


    // Función para manejar errores de geolocalización
    function showError(error) {
        console.log("Error al obtener la ubicación del usuario:", error.message);
    }


    // Obtener la ubicación del usuario y mostrarla en el mapa
    getLocation();


    const markerCompu = new google.maps.Marker({
        position: coordsCompu,
        map,
        label: {
            text: 'Laboratorio de Computación',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });


    const markerElectrica = new google.maps.Marker({
        position: coordsElectrica,
        map,
        label: {
            text: 'Laboratorio de Ingeniería Eléctrica',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });


    // Agregar marcadores adicionales con etiquetas personalizadas
    const markerMecanica = new google.maps.Marker({
        position: {lat: 32.63082789918886, lng: -115.44421793061609},
        map,
        label: {
            text: 'Laboratorio de Ingeniería Mecánica',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });


    const markerCivil = new google.maps.Marker({
        position: {lat: 32.63100705334227, lng: -115.44369204818659},
        map,
        label: {
            text: 'Laboratorio de Ingeniería Civil',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });


    const markerIndustrial = new google.maps.Marker({
        position: {lat: 32.63096031751092, lng: -115.443274513377},
        map,
        label: {
            text: 'Laboratorio de Ingeniería Industrial',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });


    const markerMecatronica = new google.maps.Marker({
        position: {lat: 32.63142544922787, lng: -115.4434806381515},
        map,
        label: {
            text: 'Laboratorio de Ingeniería Mecatrónica',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });


    const markerCienciasBasicas = new google.maps.Marker({
        position: {lat: 32.63153672439871, lng: -115.44388231719313},
        map,
        label: {
            text: 'Laboratorio de Ciencias Básicas',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });


    const markerLSC = new google.maps.Marker({
        position: {lat: 32.63163259184639, lng: -115.44293202222893},
        map,
        label: {
            text: 'Laboratorio de LSC',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });


    const markerAeroespacial = new google.maps.Marker({
        position: {lat: 32.63043018208116, lng: -115.43764115655979},
        map,
        label: {
            text: 'Laboratorio de Ingeniería Aeroespacial',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });


    const markerBioingenieria = new google.maps.Marker({
        position: {lat: 32.63012830112752, lng: -115.43792481750131},
        map,
        label: {
            text: 'Laboratorio de Bioingeniería',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });


    const markerRenovables = new google.maps.Marker({
        position: {lat: 32.63041948552934, lng: -115.43821412343671},
        map,
        label: {
            text: 'Laboratorio de Energías Renovables',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '14px',
            fontFamily: 'Arial',
            textAlign: 'center',
            verticalAlign: 'bottom',
        }
    });
}


