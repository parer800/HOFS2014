angular.module( 'weatherController', [] ).controller('WeatherCtrl', function ($scope, $http,weatherData){

  $scope.hej = "tjena";

  $http.get('/api/getWeather')
  .success(function(data) {
    //$scope.CurrentWeather = data;
    $scope.CurrentWeather = data;
    console.log(data);
    var spotifyKeyword = data.currently.summary;
    var theSpotifyKeyWord = spotifyKeyword.substring(0, spotifyKeyword.indexOf(' '));

    var currentTime = new Date();
    var keyWords = { 'spotify' : '', 'soundcloud' : '' };
    console.log(currentTime.getHours());
    if(currentTime.getHours()>20  && currentTime.getHours()<23 ){
      keyWords['spotify'] = 'lounge';
      keyWords['soundcloud'] = data.currently.summary +',lounge';
      weatherData.setProperty(keyWords);//its Lounge time
    }
    else if(currentTime.getHours()>23){
      keyWords['spotify'] = 'party';
      keyWords['soundcloud'] = data.currently.summary +', party,kygo,night';
      weatherData.setProperty(keyWords);// its party time

    }
    else{ // let the weather decide

      keyWords['spotify'] = theSpotifyKeyWord;
      keyWords['soundcloud'] = data.currently.summary +',moisture';
      weatherData.setProperty(keyWords);//sends the summary for the weather to the service.
    }


  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

// you can add a canvas by it's ID...




});
