
function initMap() {
    const center = new google.maps.LatLng(43.558774, -5.710631);
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: center,
    });
    const svgMarker = {
      path:
        "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "blue",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };
    new google.maps.Marker({
      position: map.getCenter(),
      icon: svgMarker,
      map: map,
    });
  }

  // var image = {
  //   url: 'img/icon40x60.png', //ruta de la imagen
  //   size: new google.maps.Size(40, 60), //tamaño de la imagen
  //   origin: new google.maps.Point(0,0), //origen de la iamgen
  // //el ancla de la imagen, el punto donde esta marcando, en nuestro caso el centro inferior.
  //   anchor: new google.maps.Point(20, 60) 
  //  };
  // var marcador = new google.maps.Marker({
	// 	position: new google.maps.LatLng(lat,lng),
	// 	map: map,
	// 	title: cadena,
	// 	animation: google.maps.Animation.DROP,
	// 	identificador: numero,
	// 	draggable: true,
	// 	icon : image
 
	// 	});
//   function gernera_marcador(lat,lng,numero)
// {
// if(numero > 9) 
// 	{ 	//recorremos array para borrar todos los marcadores
// 		for(a in array_marcadores)
// 		{
// 			array_marcadores[a].setMap(null); //borramos el marcador del mapa			
// 		}
// 		array_marcadores = []; //borramos todo nuestro array
// 		contador = 0; //ponemos el contador general a 0
// 		numero = 0; //ponemos el numero que le hemos passado ( en este caso seria el 10 ) a 0
 
// 	}
//   function gernera_marcador(lat,lng,numero)
//   {
//   if(numero > 9) 
//     { 	//recorremos array para borrar todos los marcadores
//       for(a in array_marcadores)
//       {
//         array_marcadores[a].setMap(null); //borramos el marcador del mapa			
//       }
//       array_marcadores = []; //borramos todo nuestro array
//       contador = 0; //ponemos el contador general a 0
//       numero = 0; //ponemos el numero que le hemos passado ( en este caso seria el 10 ) a 0
   
//     }
//   //miramos el icono a usar
//   var img1 = {
//     url:'imagenes a usar/7/sprites.png',
//     size:new google.maps.Size(50, 60), // ancho,alto
//     origin: new google.maps.Point(numero*50,0), //origen
//     anchor: new google.maps.Point(25,60) //
//   }
   
//   var cadena="soy el marcador nº ";
//   cadena+=numero;
//   var marcador = new google.maps.Marker({
//       position: new google.maps.LatLng(lat,lng),
//       map: map,
//       title: cadena,
//       animation: google.maps.Animation.DROP,
//       identificador: numero,
//       draggable: true,
//       icon : img1
//       });
//   //apilamos marcador
//   array_marcadores.push(marcador);
   
   
//     //añadimos evento click en el marcador
//     google.maps.event.addListener(marcador, 'click', function()
//     {
   
//       for(var a=0;a<array_marcadores.length;a++)
//         {
//           if(array_marcadores[a]['identificador'] == this.identificador)
//           {
//             array_marcadores[a].setMap(null); //borramos el marcador del mapa
//             array_marcadores.splice(a, 1);	  //borramos el marcador de nuestro array	
//           }
//         }
//     });
   
//   }