angular.module( 'spotifyDataController', [] ).controller('SpotifyDataCtrl', function ($scope, $http,weatherData){

  $scope.berta = "Simon prooovar lite...";



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

  };

});
