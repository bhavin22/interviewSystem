module.exports = function(app, con) {
	app.get('/getStudentList', function(req, res) {
		con.query('SELECT * FROM interview_info WHERE course="' + req.query.course + '"', function(err,rows){
		  	if(err) {
		  		console.log(err);
		  	} else {
		  		res.send(JSON.stringify(rows));
		  	}
		});
	});

	app.post('/checkInStudent', function(req, res) {	
		con.query('UPDATE interview_info SET arrivalTime = CURTIME() WHERE id="' + req.body.id + '"', function(err,rows){
		  	if(err) {
		  		console.log(err);
		  	} else {
		  		res.send();
		  	}
		});
	});

	app.post('/saveStudentData', function(req, res) {	
		con.query('UPDATE interview_info SET decision = '+ req.body.decision + ', comment = "'+ req.body.comment + '", reference = '+ req.body.reference + ' WHERE id="' + req.body.id + '"', function(err,rows){
		  	if(err) {
		  		console.log(err);
		  	} else {
		  		res.send();
		  	}
		});
	});
};