//spotifyDataService.js


summerApp.factory('spotifyDataService', function ($http, weatherData){
	return {
		getPlaylist: function() {
		  var albums;
		  var result = []; // result to send back..
		  var input = weatherData.getProperty();

		  input = encodeURI(input.spotify);

		  var searchdata = 'http://ws.spotify.com/search/1/album.json?q=' + 'humid'; // Data = sökord

			var promise = $http.get(searchdata)
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

				        	//console.log("song",data1.album.tracks[j].name, "artist", data1.album.tracks[j].artists[0].name , "duration", data1.album.tracks[j].length);

				            result.push({"song":data1.album.tracks[j].name, "artist": data1.album.tracks[j].artists[0].name , "duration": data1.album.tracks[j].length});
				        } 
				        console.log("Result: ",result);

				      }).error(function(data) {
				        console.log('Error: ' + data1);
				      });

				    } 
					
					return result;
				})
				.error(function (err) {
					return err;
				});
			return promise;
		}
	}



});
