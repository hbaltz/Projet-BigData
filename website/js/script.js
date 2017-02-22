/**
* Variable globale
*/

// Carte caméra centrée sur Paris
var map = L.map("map").setView([48.856578, 2.351828], 10);

// Layer
var layer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(map);

// Coordinates
var mylat, mylon;

// Marqueur
var layerMarkers = [];

// Cercle
var circle = null;

// Définiton des évenement au clique sur les boutons
document.getElementById("removeMarker").addEventListener("click", removeMarker);
document.getElementById("locateMe").addEventListener("click", locateMe);

/**
* Fonction qui ajoute un marqueur à la carte prend en entrée
* lat long : des coordonées
* label : un label
*/
function addMarker(lat, long, label) {
  var marker = L.marker([lat, long]);
  layerMarkers.push(marker);
  marker.addTo(map).bindPopup(label);

  mapSetView(lat, long, 14);
}

/**
* Fonction qui ajoute un cercle à la carte prend en entrée
* lat long : des coordonées
* rads: le rayon
*/
function addCircle(lat, long, rads){
  circle = L.circle([lat, long], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: rads
  }).addTo(map);
}

/**
* Fonction qui supprime tout els marqueurs de la carte
*/
function removeMarker(event){
  removeLayer(layerMarkers);
}

/**
* Supprime un layer
*/
function removeLayer(layerName) {
  if (layerName !== undefined && layerName.length > 0) {
    for (var i = 0; i < layerName.length; i++) {
      layerName[i].remove();
    }
  }
  if(circle != null) circle.remove();
}

/**
* Fonction qui zoom sur la carte  prend en entrée
* lat long : les coordonées où l'on souhaitee zoomer
* zoom : le niveau de zoom
*/
function mapSetView(lat, long, zoom) {
  if (zoom === undefined) {
    zoom = 10;
  }
  map.setView([lat, long], zoom);
}

/**
* Fonction qui positionne la caméra sur la carte prend en entrée
* lat long : les coordonées où positionné la caméra
*/
function setPosition(latitude, longitude){
  mylat = latitude;
  mylon = longitude;
}

/**
* Ce sert du navigateur pour localiser l'utilisateur
*/
function locateMe(event) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    setPosition(position.coords.latitude, position.coords.longitude);
    addMarker(position.coords.latitude, position.coords.longitude, "Me");
    addCircle(position.coords.latitude, position.coords.longitude,500);
    mapSetView(position.coords.latitude, position.coords.longitude, 16);
  });
}

/**
* Ajout un marqueur au clique
*/
map.on('click', function(e){
  console.log("lat : " + e.latlng["lat"] + ", lon : " + e.latlng["lng"]);
  setPosition(e.latlng["lat"], e.latlng["lng"]);
  addMarker(e.latlng["lat"], e.latlng["lng"], "Me");
  addCircle(e.latlng["lat"], e.latlng["lng"],500);
  mapSetView(e.latlng["lat"], e.latlng["lng"], 16);
});
