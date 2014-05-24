summerApp.controller('soundcloudDataCtrl', function ($scope, $http, weatherData){

	$scope.soundcloudList;

	$http.get('/api/user/').success(function (data) {
		$scope.soundcloudList = data;
		console.log(data);
	});



});