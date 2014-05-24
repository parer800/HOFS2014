angular.module( 'weatherController', [] ).controller('WeatherCtrl', function ($scope, $http){

  $scope.hej = "tjena";

  $http.get('/api/getWeather')
  .success(function(data) {
    //$scope.CurrentWeather = data;


  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

// you can add a canvas by it's ID...




});
