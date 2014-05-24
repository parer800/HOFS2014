angular.module('appRoutes', []).config(['$sceDelegateProvider', '$routeProvider', '$locationProvider','$httpProvider', function($sceDelegateProvider, $routeProvider, $locationProvider, $httpProvider) {

	$routeProvider
		// home page
		.when('/start', {
			templateUrl: 'pages/start.html',
		})
		.when('/hej', {
			templateUrl: 'pages/start.html',
		});
		$locationProvider.html5Mode(true);
}]);
