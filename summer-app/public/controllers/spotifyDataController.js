angular.module( 'spotifyDataController', [] ).controller('SpotifyDataCtrl', function ($scope, $http){

  $scope.berta = "Simon prooovar lite...";

  $scope.search = function(data){

  	var searchdata = 'http://ws.spotify.com/search/1/album.json?q=' + data;

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