interviewApp.controller('report1Controller', ['$scope', '$http', function($scope, $http) {
	$scope.labels = [];
	$scope.series = ['Total', 'Arrived', 'Offered'];
	var arrTotal = [];
	var arrArrived = [];
	var arrOffered = [];
	$http.get("getReport1Data").then(function (rows) {
    	for(var i in rows.data) {
    		$scope.labels.push(rows.data[i].course);
    		arrTotal.push(rows.data[i].total);
    		arrArrived.push(rows.data[i].arrived);
    		arrOffered.push(rows.data[i].offered);
    	}

	  	$scope.data = [arrTotal,arrArrived,arrOffered];
  	});
}]);