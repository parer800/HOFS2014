//playlistController.js

summerApp.controller('playlistController', function ($scope, $http, soundcloudDataService, spotifyDataService,weatherData){

	console.log("try to init");
	$scope.soundcloudList;
	$scope.spotifyList;

	

	$scope.search = function(data){

    var temp = weatherData.getProperty();

    console.log("tst service: ",temp);

  	var searchdata = 'http://ws.spotify.com/search/1/album.json?q=' + temp; // Data = sökord



	/*spotifyDataService.getPlaylist().then(function(promise) {
		console.log("Promise Spotify: ",promise)
		$scope.spotifyList = promise;

	});*/
	soundcloudDataService.getPlaylist().then(function(promise) {
		console.log("Promise SoundCloud: ",promise)
		$scope.soundcloudList = promise;

	});


	var albums;
	  var result = []; // result to send back..
	  var input = weatherData.getProperty();

	  input = encodeURI(input.spotify);

	  var searchdata = 'http://ws.spotify.com/search/1/album.json?q=' + 'humid'; // Data = sökord

		$http.get(searchdata)
			.success(function (data) {
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

			      $http.get(searchdata)
			      .success(function(data1) {

			        var j;
			        for(j=0;j<3;j++){

			            result.push({"song":data1.album.tracks[j].name, "artist": data1.album.tracks[j].artists[0].name , "duration": data1.album.tracks[j].length});
			        } 
			        console.log("Result: ",result);
			        $scope.spotifyList=result;


			      }).error(function(data) {
			        console.log('Error: ' + data1);
			      });
			    } 
				console.log($scope.spotifyList);
			})
			.error(function (err) {
				return err;
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