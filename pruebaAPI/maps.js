'use strict'
var map; //Primero se crea una variable map
function initMap() { //realiza una instancia a la clase Map, donde esta clase es el elemento central de la API de Google Maps, y es la encargada de crear el mapa
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.5293101, lng: -5.6773233},  //Todos los mapas necesitarán de dos opciones obligatorias para poder construir el mapa, se trata de center y zoom.
    zoom: 13
    });


   var marker = new google.maps.Marker({
    position: {lat: 43.542194, lng: -5.676875},
    map: map,
    title: 'Acuario de Gijón'
   });


    var image =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const beachMarker = new google.maps.Marker({
      position: { lat: 43.539007, lng: -5.704666 },
      map:map,
      icon: image,
      title:'Cristasa',
    })
}



    