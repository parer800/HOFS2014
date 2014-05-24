angular.module( 'weatherController', [] ).controller('WeatherCtrl', function ($scope, $http,weatherData){

  $scope.hej = "tjena";

  $http.get('/api/getWeather')
  .success(function(data) {
    //$scope.CurrentWeather = data;
    $scope.CurrentWeather = data;
    console.log(data);

    weatherData.setProperty(data.currently.summary);//sends the summary for the weather to the service.

  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

// you can add a canvas by it's ID...




});
