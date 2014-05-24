angular.module( 'weatherController', [] ).controller('WeatherCtrl', function ($scope, $http,weatherData){

  $scope.hej = "tjena";

  $http.get('/api/getWeather')
  .success(function(data) {
    //$scope.CurrentWeather = data;
    $scope.CurrentWeather = data;
    weatherData.setProperty($scope.CurrentWeather);



  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

// you can add a canvas by it's ID...




});
