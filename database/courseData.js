module.exports = function(app, con) {
	app.get('/getCourseList', function(req, res) {
		con.query('SELECT DISTINCT(course) FROM interview_info',function(err,rows){
		  	if(err) {
		  		console.log(err);
		  	} else {
		  		res.send(JSON.stringify(rows));
		  	}
		});
	});
};