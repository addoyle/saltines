$( document ).ready(function() {
  navigator.geolocation.getCurrentPosition(function(p){$('#gps').value = p.coords.latitude+','+p.coords.longitude});
});
