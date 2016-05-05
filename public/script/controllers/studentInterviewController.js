interviewApp.controller('studentInterviewController', ['$scope', '$rootScope', '$location', '$http', function($scope, $rootScope, $location, $http) {
	if(angular.isUndefined($rootScope.selectedStudent) || $rootScope.selectedStudent === null) {
        bootbox.alert("Please select course and student first");
        $location.path('/interviewPanel');
    } else {
    	if($rootScope.selectedStudent.decision === null || $rootScope.selectedStudent.decision === 0) {
			$rootScope.selectedStudent.decision = false;
		} else {
			$rootScope.selectedStudent.decision = true;
		}
		if($rootScope.selectedStudent.reference === null) {
			$rootScope.selectedStudent.reference = 0;
		}
		if($rootScope.selectedStudent.comment === null) {
			$rootScope.selectedStudent.comment = "";
		}
    	$scope.saveData = function() {
    		if($rootScope.selectedStudent.decision) {
    			$rootScope.selectedStudent.decision = 1;
    		} else {
    			$rootScope.selectedStudent.decision = 0;
    		}
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