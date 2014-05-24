summerApp.controller('soundcloudDataCtrl', function ($scope, $http, weatherData){

	$scope.soundcloudList;
	$scope.tags = weatherData.getProperty().soundcloud;
	console.log($scope.tags);
	$http.get('/api/soundcloud/').success(function (data) {
		$scope.soundcloudList = data;
		console.log(data);
	});



});