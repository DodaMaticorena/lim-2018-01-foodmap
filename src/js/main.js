// Google maps
const mapGoogle = {
  center: new google.maps.LatLng(-12.046374,-77.042793),
  zoom: 11,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

new google.maps.Map(document.querySelector('#map'), mapGoogle);

// const inputFilter = document.querySelector('#filter-options').addEventListener('click',() => {

// })
