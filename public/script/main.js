var interviewApp = angular.module('interviewApp', ['ngRoute', 'chart.js']);

interviewApp.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'views/home.html',
			controller  : 'homeController'
		})

		.when('/home', {
			templateUrl : 'views/home.html',
			controller  : 'homeController'
		})

		.when('/report1', {
			templateUrl : 'views/report1.html',
			controller  : 'report1Controller'
		})

		.when('/report2', {
			templateUrl : 'views/report2.html',
			controller  : 'report2Controller'
		})

		.otherwise({
			redirectTo: '/'
		});
});

interviewApp.run(function($rootScope) {
 	
});