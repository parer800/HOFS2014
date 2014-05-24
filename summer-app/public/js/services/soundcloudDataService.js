//soundcloudDataService.js

summerApp.factory('soundcloudDataService', function ($http, weatherData){
	return {
		getPlaylist: function() {
			
			console.log(weatherData.getProperty().soundcloud);
			var promise = $http.get('/api/soundcloud/summer')
				.success(function (result) {
					console.log(result)
					
					return result;
				})
				.error(function (err) {
					return err;
				});
			return promise;
		}
	}



});
