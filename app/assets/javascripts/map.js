$(document).ready(function() {

  var map = L.mapbox.map('map', 'lchangdev.j5005lke', { zoomControl: false }).setView([33.852,  -117.985], 12);

  new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

});
