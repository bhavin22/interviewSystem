interviewApp.controller('interviewPanelController', ['$scope', '$rootScope', '$location', '$http', function($scope, $rootScope, $location, $http) {
  $("#studentSearch").remove();
	$scope.courseList = [];
	$rootScope.selectedCourse = null;
	$http.get("getCourseList").then(function (rows) {
    	for(var i in rows.data) {
    		$scope.courseList.push(rows.data[i].course);
    	}
  	});

  	$scope.courseSelected = function() {
  		$rootScope.selectedCourse = this.course;
	    $location.path('/studentList');
  	};
}]);