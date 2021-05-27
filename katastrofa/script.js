   var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


navigator.geolocation.getCurrentPosition(success, error, options);

function success(pos) {
  var lat1 = pos.coords.latitude;
  var lon1 = pos.coords.longitude;
  var lat2 = 49.9777167;
  var lon2 = 20.0637000;

  final(getDistance, lat1, lon1, lat2, lon2); // <-- call it from here
}

function error(err) {
  document.getElementById("demo").textContent = "Error.";
}

//haversine formula

function getDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function final(getDistance, lat1, lon1, lat2, lon2) {
  document.getElementById("demo").textContent = Math.round(1000*getDistance(lat1, lon1, lat2, lon2)) + " m";
  lat2 = 49.9758000;
  lon2 = 20.0634000;
  document.getElementById("dwemo").textContent = Math.round(1000*getDistance(lat1, lon1, lat2, lon2)) + " m";
}