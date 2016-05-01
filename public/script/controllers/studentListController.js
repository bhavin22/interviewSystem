interviewApp.controller('studentListController', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location) {
	if(angular.isUndefined($rootScope.selectedCourse) || $rootScope.selectedCourse === null) {
        alert("Please select course first");
        $location.path('/interviewPanel');
    } else {
        $scope.allStudentList = [];
        $scope.waitingStudentList = [];
        $scope.studentList = [];
        $rootScope.selectedStudent = null;
        $scope.studentCount = 0;
        $scope.toggleMode = 0;
        $http.get("getStudentList", {
            params : {
                course : $rootScope.selectedCourse
            }
        }).then(function (rows) {
            for(var i in rows.data) {
                $scope.allStudentList.push({
                    id : rows.data[i].id,
                    firstName : rows.data[i].firstName,
                    lastName  : rows.data[i].lastName,
                    arrivalTime: rows.data[i].arrivalTime,
                    decision : rows.data[i].decision,
                    comment : rows.data[i].comment,
                    reference : rows.data[i].reference
                });
                if(rows.data[i].arrivalTime && rows.data[i].decision === null) {
                    $scope.waitingStudentList.push({
                        id : rows.data[i].id,
                        firstName : rows.data[i].firstName,
                        lastName  : rows.data[i].lastName,
                        arrivalTime: rows.data[i].arrivalTime,
                        decision : rows.data[i].decision,
                        comment : rows.data[i].comment,
                        reference : rows.data[i].reference
                    });
                }
            }
            $scope.studentList = $scope.allStudentList;
            $scope.studentCount = $scope.studentList.length;
        });

        $scope.toggleStudentList = function(event) {
            if($scope.toggleMode === 0) {
                $scope.studentList = $scope.waitingStudentList;
                $scope.studentCount = $scope.studentList.length;
                event.currentTarget.innerHTML = "Show all students";
                $scope.toggleMode = 1;
            } else {
                $scope.studentList = $scope.allStudentList;
                $scope.studentCount = $scope.studentList.length;
                event.currentTarget.innerHTML = "Show only waiting students";
                $scope.toggleMode = 0;
            }
        }

        $scope.studentSelected = function() {
            $rootScope.selectedStudent = this.student;
            $location.path("/studentInterview");
        };
    }
}]);