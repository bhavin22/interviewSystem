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

		.when('/interviewPrep', {
			templateUrl : 'views/courseList.html',
			controller  : 'interviewPrepController'
		})

		.when('/checkInStudent', {
			templateUrl : 'views/checkInStudent.html',
			controller  : 'checkInStudentController'
		})
		
		.when('/interviewPanel', {
			templateUrl : 'views/courseList.html',
			controller  : 'interviewPanelController'
		})

		.when('/studentList', {
			templateUrl : 'views/studentList.html',
			controller  : 'studentListController'
		})

		.when('/studentInterview', {
			templateUrl : 'views/studentInterview.html',
			controller  : 'studentInterviewController'
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