angular.module( 'spotifyDataController', [] ).controller('SpotifyDataCtrl', function ($scope, $http,weatherData){





  $scope.search = function(data){

  var weather = weatherData.getProperty();  // Get key word to search for album with ...Get the key from weather
  var albums;
  var result = []; // result to send back..

  var searchdata = 'http://ws.spotify.com/search/1/album.json?q=' + data; // Data = sökord

	 $http.get(searchdata)
		.success(function(data) {

			// Plockar ut alla album
  	albums = data.albums;

    var nrOfalbums;
    // Select the three first albums... if three exists
    if(albums.length < 3){
        nrOfalbums = albums.length;
    }
    else{
      nrOfalbums = 3;
    }

    var i;
    var albumID;
    for(i=0;i<nrOfalbums;i++)
    {
       albumID = albums[i].href;

      searchdata = 'http://ws.spotify.com/lookup/1/.json?uri='+albumID+'&extras=trackdetail';
      console.log("Next query..");

      $http.get(searchdata)
      .success(function(data1) {

        var j;
        for(j=0;j<3;j++){

            result.push({"song":data1.album.tracks[j].name, "artist": data1.album.tracks[j].artists[0].name , "duration": data1.album.tracks[j].length});
        } 
        console.log("Result: ",result);

      }).error(function(data) {
        console.log('Error: ' + data1);
      });

    }  
	})
  .error(function(data) {
    console.log('Error: ' + data);
  });


  };

});
