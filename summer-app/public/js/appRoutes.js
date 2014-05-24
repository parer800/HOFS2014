angular.module('appRoutes', []).config(['$sceDelegateProvider', '$routeProvider', '$locationProvider','$httpProvider', function($sceDelegateProvider, $routeProvider, $locationProvider, $httpProvider) {

	$routeProvider
		// home page
		.when('/start', {
			templateUrl: '/pages/start.html',
		});


}]);
