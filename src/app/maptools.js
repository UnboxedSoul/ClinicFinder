var app = angular.module('myApp', []);

app.service('Map', function($q) {
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(40.7127837,-74.00594130000002),
            zoom: 13,
            disableDeafaultUI: true
        };
        this.map = new google.maps.Map(document.getElementById("map"), options);
        this.places = new google.maps.places.PlacesService(this.map);
    };
});

// var origin1 = new google.maps.LatLng(55.930385, -3.118425);
// var origin2 = 'Greenwich, England';
// var destinationA = 'Stockholm, Sweden';
// var destinationB = new google.maps.LatLng(50.087692, 14.421150);

// var service = new google.maps.DistanceMatrixService();
// service.getDistanceMatrix(
//   {
//     origins: [origin1, origin2],
//     destinations: [destinationA, destinationB],
//     travelMode: 'DRIVING',
//     transitOptions: TransitOptions,
//     drivingOptions: DrivingOptions,
//     unitSystem: UnitSystem,
//     avoidHighways: Boolean,
//     avoidTolls: Boolean,
//   }, callback);

// function callback(response, status) {
//   console.log(response);
// }