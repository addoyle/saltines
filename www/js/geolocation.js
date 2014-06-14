$( document ).ready(function() {
  navigator.geolocation.getCurrentPosition(function(p){document.getElementById('gps').value = p.coords.latitude+','+p.coords.longitude});
});
