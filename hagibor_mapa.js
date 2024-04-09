var mapOptions = {
 mapTypeId: 'roadmap',
 disableDefaultUI: true,
 //zoom: zoomSize,
 //scrollwheel: false,
 styles: [
   {
       "featureType": "administrative",
       "elementType": "labels.text.fill",
       "stylers": [
           {
               "color": "#444444"
           }
       ]
   },
   {
       "featureType": "administrative.neighborhood",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "landscape",
       "elementType": "all",
       "stylers": [
           {
               "color": "#f2f2f2"
           }
       ]
   },
   {
       "featureType": "poi",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road",
       "elementType": "all",
       "stylers": [
           {
               "saturation": -100
           },
           {
               "lightness": 45
           }
       ]
   },
   {
       "featureType": "road.highway",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "simplified"
           }
       ]
   },
   {
       "featureType": "road.arterial",
       "elementType": "labels.icon",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "transit",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "water",
       "elementType": "all",
       "stylers": [
           {
               "color": "#cfe5ee"
           },
           {
               "visibility": "on"
           }
       ]
   }
]
};

// Variables for Google maps
var map, mapElem, markerImg, markerImg2, infoWindow, marker;
var markers = [],
 infoWindows = [],
 races = [{
     lat: 50.07897083143043,
     lng: 14.483878655929344,
     nadpis: "Delta Hagibor",
     type: "img1"

   },
   {
     lat: 50.051563,
     lng: 14.4255112,
     nadpis: "Školka",
     type: "img2"
   },
   {
     lat: 50.0430051,
     lng: 14.4471805,
     nadpis: "Základní škola",
     type: "img3"
     
   }];

function initialize() {
 markerImg = {
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   img1: {
     url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
  
   tram: {
     url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae57109e4b47584ecc4_tram.png',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   },
   zakladni: {
     url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae57a9a09b4befe0923_zs.png',
     size: new google.maps.Size(80, 91),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(40, 90),
     scaledSize: new google.maps.Size(80, 91)
   }
 }

 // Display a map on the page
 mapElem = document.getElementById('map_canvas');
 map = new google.maps.Map(mapElem, mapOptions);
 map.setTilt(45);



 // Loop through our array of races
 for (i = 0; i < races.length; i++) {
   var race = races[i];

   // Generate an infowindow content for the marker
   var infoWindow = new google.maps.InfoWindow();
   infoWindow.setContent(
     '<h2 class="mapbox_header">' + race.nadpis + '</h2>'
   );
   infoWindows.push(infoWindow);

   // Place a marker on the map
   createMarker(race.lat, race.lng, race.type, i);
 }

// defaultni hodnoty pokud by se neco posralo, 
// ale tyto hodnoty by se meli pokazde zmenit samy
// -Max
  var zoomOffset = 12;
  var xOffset = -0;
  var yOffset = -0;
  
 	if (document.documentElement.clientWidth >= 2560){
  // 4k
    zoomOffset = 14;
    xOffset = -50;
    yOffset = -58;
  }else if (document.documentElement.clientWidth >= 1440){
  // laptop L
    zoomOffset = 13;
    xOffset = -50;
    yOffset = -58;
  }else if (document.documentElement.clientWidth >= 1024){
  // Laptop
    zoomOffset = 13;
    xOffset = -30;
    yOffset = -50;
  }else if (document.documentElement.clientWidth >= 768){
  // Tablet
    zoomOffset = 12;
    xOffset = -20;
    yOffset = -45;
  }else if (document.documentElement.clientWidth >= 425){
  // Phone L
    zoomOffset = 12;
    xOffset = -20;
    yOffset = -45;
  }
  
  // pokud budete potrebovat vic rozliseni staci 
  // zkopirovat else if a zmenit hodnotu cisla
  // -Max
  
 // pridat parametr true pokud je vzdalenost zoomSize 
 // nedulezita a staci prumerny zoom
 // -Max
 fitToMarkers(xOffset, yOffset,zoomOffset /*,true*/);
  
}

/*
// pridano z jineho scriptu
function mapResize() {
 google.maps.event.trigger(map, "resize");
 fitToMarkers();
}
// pridano z jineho scriptu end
*/

function createMarker(x, y, type, i) {
 var iconImg = markerImg
 if (type == "img2") {
   var iconImg = markerImg.img2
 } else if (type == "img3") {
   var iconImg = markerImg.img3
 } else {
   var iconImg = markerImg.img1
 }
 marker = new google.maps.Marker({
   map: map,
   icon: iconImg,
   position: new google.maps.LatLng(x, y),
   title: races[i].name
 });
 marker._index = i;
 markers.push(marker);

 // Click event on marker
 google.maps.event.addListener(marker, 'click', (function(marker, i) {
   return function() {
     // Close last opened infowindow if any
     if (infoWindow) infoWindow.close();
     // Open clicked infowindow
     infoWindow = infoWindows[i];
     infoWindow.open(map, marker);
   }
 })(marker, i));
}

function fitToMarkers(OffsetX, OffsetY, zoomSize, boolBound = false) {

var bounds = new google.maps.LatLngBounds();
 for (var i = 0; i < markers.length; i++) {
   var myLatLng = new google.maps.LatLng(markers[i].getPosition().lat(), markers[i].getPosition().lng());
   bounds.extend(myLatLng);
 }
 
 // kvuli fitBound nejde menit vzdalenost zoomu
 // bylo by zapotrebi pridat offset body, ktere by 
 // oznacovaly offset od hrany
 // => hodne prace navic
 // hodnotu dejte true pokud moc nezalezi na placementu kamery
 // -Max
 if(boolBound){
 	map.fitBounds(bounds);
 }
 
 // hodi kameru do prumerneho stredu vsech bodu
 // -Max
 map.setCenter(bounds.getCenter());
 
 // panBy posouva kameru podle hodnoty Offsetu
 // pokud je offsetx = 150,
 // tak kamera bude posunuta hodne doprava (treba z prahy do brna)
 // -Max
 map.panBy(OffsetX,OffsetY);
 
 // zoomSize urcuje jak moc je kamera priblizena
 // cim mensi cislo tim vetsi vzdalenost
 // takze pokud zoomSize = 1
 // tak bude kamera tak moc oddalena ze bude videt cela Evropa
 // pokud je zoomSize = 24 (myslim ze maximalni hodnota)
 // mel by teoreticky jit videt jeden byt pres celou mapu
 // -Max
 map.setZoom(zoomSize);
}