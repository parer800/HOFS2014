//playlistController.js

summerApp.controller('playlistController', function ($scope, $http, soundcloudDataService, weatherData){

	console.log("try to init");
	$scope.soundcloudList = [];
	$scope.spotifyList;



	$scope.search = function(data){

    var temp = weatherData.getProperty();

    console.log("tst service: ",temp);

  	var searchdata = 'http://ws.spotify.com/search/1/album.json?q=' + temp; // Data = sökord

  	 $http.get(searchdata)
  		.success(function(data) {
  			// Plockar ut alla album
    	$scope.spotifyData = data.albums;
    	console.log(data.albums);

  	})
	  .error(function(data) {
	    console.log('Error: ' + data);
	  });


	soundcloudDataService.getPlaylist().then(function(promise) {
		console.log(promise)
		$scope.soundcloudList = promise;

	});
	  // Har vi tio album
	 /* if($scope.spotifyData.length > 10)
	  {
	  	var hej = 10;
	  }
	  else
	  {
	  	var hej = $scope.spotifyData.length
	  }
*/

  };



});
