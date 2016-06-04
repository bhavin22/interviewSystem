interviewApp.controller('studentInterviewController', ['$scope', '$rootScope', '$location', '$http', function($scope, $rootScope, $location, $http) {
	if(angular.isUndefined($rootScope.selectedStudent) || $rootScope.selectedStudent === null) {
        bootbox.alert("Please select course and student first");
        $location.path('/interviewPanel');
    } else {
		$rootScope.selectedStudent.decision = $rootScope.selectedStudent.decision || 0;
		$rootScope.selectedStudent.reference = $rootScope.selectedStudent.reference || 0;
		$rootScope.selectedStudent.comment = $rootScope.selectedStudent.comment || "";
		$rootScope.selectedStudent.field1 = $rootScope.selectedStudent.field1 || "";
		$rootScope.selectedStudent.field2 = $rootScope.selectedStudent.field2 || "";
		$rootScope.selectedStudent.field3 = $rootScope.selectedStudent.field3 || "";
    	$scope.saveData = function() {
    		$http.post("saveStudentData", {
	            id: $rootScope.selectedStudent.id,
	            decision : $rootScope.selectedStudent.decision,
	            comment : $rootScope.selectedStudent.comment,
	            reference : parseInt($rootScope.selectedStudent.reference),
	            field1 : $rootScope.selectedStudent.field1,
	            field2 : $rootScope.selectedStudent.field2,
	            field3 : $rootScope.selectedStudent.field3
	        }).then(function () {
				$location.path("/studentList");
			});
    	};
    }
}]);