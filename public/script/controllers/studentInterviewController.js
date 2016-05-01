interviewApp.controller('studentInterviewController', ['$scope', '$rootScope', '$location', '$http', function($scope, $rootScope, $location, $http) {
	if(angular.isUndefined($rootScope.selectedStudent) || $rootScope.selectedStudent === null) {
        alert("Please select course and student first");
        $location.path('/interviewPanel');
    } else {
    	if($rootScope.selectedStudent.decision === null) {
			$rootScope.selectedStudent.decision = false;
		}
		if($rootScope.selectedStudent.reference === null) {
			$rootScope.selectedStudent.reference = 0;
		}
		if($rootScope.selectedStudent.comment === null) {
			$rootScope.selectedStudent.comment = "";
		}
    	$scope.saveData = function() {
    		$http.post("saveStudentData", {
	            id: $rootScope.selectedStudent.id,
	            decision : $rootScope.selectedStudent.decision,
	            comment : $rootScope.selectedStudent.comment,
	            reference : parseInt($rootScope.selectedStudent.reference)
	        }).then(function () {
				$location.path("/studentList");
			});
    	};
    }
}]);