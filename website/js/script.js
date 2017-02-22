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
* Fonction qui supprime tout els marqueurs de la carte
*/
function removeMarker(event){
  removeLayer(layerMarkers);
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
  mapSetView(e.latlng["lat"], e.latlng["lng"], 16);
});
