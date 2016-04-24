interviewApp.controller('report2Controller', ['$scope', '$http', function($scope, $http) {
	$scope.labels = [];
	$scope.series = ['Waiting for interview'];
	var arrWaiting = [];
	$http.get("getReport2Data").then(function (rows) {
    	for(var i in rows.data) {
    		$scope.labels.push(rows.data[i].course);
    		arrWaiting.push(rows.data[i].waiting);
    	}

	  	$scope.data = [arrWaiting];
  	});
}]);