module.exports = function(app, con) {
	app.get('/getReport1Data', function(req, res) {
		con.query('SELECT course, COUNT(*) AS total, SUM(if(arrivalTime IS NOT NULL, 1, 0)) AS arrived, SUM(decision=1) AS offered FROM interview_info GROUP BY course',function(err,rows){
		  	if(err) {
		  		console.log(err);
		  	} else {
		  		res.send(JSON.stringify(rows));
		  	}
		});
	});

	app.get('/getReport2Data', function(req, res) {
		con.query('SELECT course, SUM(if(arrivalTime IS NOT NULL AND decision IS NULL, 1, 0)) AS waiting FROM interview_info GROUP BY course',function(err,rows){
		  	if(err) {
		  		console.log(err);
		  	} else {
		  		res.send(JSON.stringify(rows));
		  	}
		});
	});
};