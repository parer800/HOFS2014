angular.module( 'spotifyDataController', [] ).controller('SpotifyDataCtrl', function ($scope, $http){

  $scope.berta = "Simon prooovar lite...";

  $scope.search = function(data){

  	var searchdata = 'https://ws.spotify.com/search/1/artist.json?q=' + data;

  	 $http.get(searchdata)
  		.success(function(data) {
    	$scope.spotifyData = data;
    	console.log(data);

  	})
	  .error(function(data) {
	    console.log('Error: ' + data);
	  });

  };

});