angular.module( 'weatherController', [] ).controller('WeatherCtrl', function ($scope, $http){

  $scope.hej = "tjena";

  $http.get('/api/getWeather')
  .success(function(data) {
    //$scope.CurrentWeather = data;
    $scope.CurrentWeather = data;
    console.log(data.currently.icon);

    $scope.CurrentW = {
        forecast: {
            icon: data.currently.icon
        }
    };




  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

// you can add a canvas by it's ID...




});
