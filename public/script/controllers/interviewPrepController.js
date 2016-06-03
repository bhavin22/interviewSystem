interviewApp.controller('interviewPrepController', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location) {
  $scope.isPrepController = true;
	$scope.courseList = [];
  $scope.studentList = [];
  $scope.search = '';
	$rootScope.selectedCourse = null;
  $rootScope.selectedStudent = null;
	$http.get("getCourseList").then(function (rows) {
    	for(var i in rows.data) {
    		$scope.courseList.push(rows.data[i].course);
    	}
  	});

  	$scope.courseSelected = function() {
  		$rootScope.selectedCourse = this.course;
	    $location.path('/checkInStudent');
  	};

    $http.get("getAllStudentList",{}).then(function (rows) {
      for(var i in rows.data) {
        $scope.studentList.push({
          id : rows.data[i].id,
          lastName: rows.data[i].lastName,
          course: rows.data[i].course
        });
      }
    });

    function escapeRegExp(string){
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }
    var regex;
    $scope.$watch('search', function (value) {
      regex = new RegExp('\\b' + escapeRegExp(value), 'i');
    });
      
    $scope.filterBySearch = function(student) {
      if (!$scope.search) return false;
      return regex.test(student.lastName);
    };

    $scope.studentSelected = function(event) {
      $rootScope.selectedStudent = this.student;
      $rootScope.selectedCourse = this.student.course;
      $location.path('/checkInStudent');
    };
}]);