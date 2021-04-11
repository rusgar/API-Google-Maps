'use strict'
// El siguiente ejemplo crea marcadores complejos para indicar playas cercanas
// var map; //Primero se crea una variable map
function initMap() {//realiza una instancia a la clase Map, donde esta clase es el elemento central de la API de Google Maps, y es la encargada de crear el mapa
    const map = new google.maps.Map(document.getElementById("map"), {//Todos los mapas necesitarán de dos opciones obligatorias para poder construir el mapa, se trata de center y zoom.
      zoom: 13,
      center: { lat: 43.5293101, lng: -5.6773233 },
    });
    setMarkers(map);
  }
//   var marker = new google.maps.Marker({
//     position: {lat: 43.542194, lng: -5.676875},
//     map: map,
//     title: 'Acuario de Gijón'
//    });
  // Datos para los marcadores que constan de un nombre, un LatLng y un icono
  // ordena los marcadores deben mostrarse uno encima del otro.
  const beaches = [
    ["San Lorenzo", 43.543002, -5.648100, 4],
    ["Poniente", 43.543157, -5.672343, 5],
    ["Arbeyal", 43.545427, -5.694153, 3],
    ["Rinconin", ,43.548719, -5.638713, 2],
    ["Peñarrubia", 43.550412, -5.628547, 1],
  ];
  
  function setMarkers(map) {
    // Agrega marcadores al mapa.
    // Los tamaños de los marcadores se expresan como un tamaño de X, Y donde el origen de la imagen
    // (0,0) se encuentra en la parte superior izquierda de la imagen.
    // Los orígenes, las posiciones de anclaje y las coordenadas del marcador aumentan en la X
    // dirección hacia la derecha y en la dirección Y hacia abajo.
    const image = {
      url:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      // Este marcador tiene 20 píxeles de ancho por 32 píxeles de alto.
      size: new google.maps.Size(20, 32),
      // El origen de esta imagen es (0, 0).
      origin: new google.maps.Point(0, 0),
      // El ancla de esta imagen es la base del asta de la bandera en (0, 32).
      anchor: new google.maps.Point(0, 32),
    };
    // Las formas definen la región del icono en la que se puede hacer clic. El tipo define un HTML
    // <area> elemento 'poly' que traza un polígono como una serie de puntos X, Y.
    // La coordenada final cierra el polígono conectándose a la primera coordenada
    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: "poly",
    };
  
    for (let i = 0; i < beaches.length; i++) {
      const beach = beaches[i];
      new google.maps.Marker({
        position: { lat: beach[1], lng: beach[2] },
        map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3],
      });
    }
  }