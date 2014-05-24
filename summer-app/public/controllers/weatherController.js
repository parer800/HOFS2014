/*
var app = angular.module( 'myApp.controllers', [] );

app.controller( 'WeatherCtrl', function ($scope, $http) {




  $http.get('/api/getWeather')
  .success(function(data) {
    $scope.CurrentWeather = data;

  })
  .error(function(data) {
    console.log('Error: ' + data);
  });


  /*
  $scope.CurrentWeather = {
  forecast: {
  icon: "partly-cloudy-night",

}
};


} );
*/
