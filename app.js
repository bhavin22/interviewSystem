var express = require("express");
var path =  require("path");
var mysql = require("mysql");
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

require(__dirname + "/route.js")(app, path);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "interview_system"
});

con.connect(function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log('Connection established');
});

require(__dirname + "/database/reportData.js")(app, con);
require(__dirname + "/database/courseData.js")(app, con);
require(__dirname + "/database/studentData.js")(app, con);

app.listen(3000);
