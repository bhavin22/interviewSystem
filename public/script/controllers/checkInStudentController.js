interviewApp.controller('checkInStudentController', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location) {
	if(!$rootScope.selectedCourse) {
		bootbox.alert("Please select course first");
		$location.path('/interviewPrep');
	} else {
		$scope.studentList = [];
		$scope.selectedStudent = null;
	  	$scope.search = '';

	  	$scope.markAsArrived = function() {
			if(angular.isUndefined($scope.selectedStudent) || $scope.selectedStudent === null) {
				bootbox.alert("Please select student by typing lastname in search bar");
			} else {
				$http.post("checkInStudent", {
		            id: $scope.selectedStudent.id
		        }).then(function () {
		        	$scope.search = $scope.selectedStudent.lastName;
					bootbox.alert("Student " + $scope.selectedStudent.lastName + " has been checked in for course " + $rootScope.selectedCourse)
					$scope.selectedStudent = null;
				});
			}
		};

	  	function escapeRegExp(string){
	    	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
		}

	    $scope.$watch('search', function (value) {
	        regex = new RegExp('\\b' + escapeRegExp(value), 'i');
	    });
	    
	    $scope.filterBySearch = function(student) {
	        if (!$scope.search) return false;
	        return regex.test(student.lastName);
	    };

	    var regex;
		$scope.studentSelected = function(event) {
			$scope.selectedStudent = this.student;
			$scope.search = $scope.selectedStudent.lastName;
		};

		if($rootScope.selectedStudent){
			$scope.selectedStudent = $rootScope.selectedStudent;
			$scope.markAsArrived();
		}
		else{	
			$http.get("getStudentList", {
				params : {
					course : $rootScope.selectedCourse
				}
			}).then(function (rows) {
				for(var i in rows.data) {
					$scope.studentList.push({
						id : rows.data[i].id,
						lastName: rows.data[i].lastName,
						firstName : rows.data[i].firstName,
						course : rows.data[i].course
					});
				}
			});
		} 
	}
}]);