function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.880, lng:-117.236};
  var ucsd_cicc = {lat:32.885078, lng:-117.241314};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_cicc,
    zoom: 18
  });

  var marker = new google.maps.Marker({
      position: ucsd_cicc,
      map: map,
      title: 'UCSD CICC'
  });
}