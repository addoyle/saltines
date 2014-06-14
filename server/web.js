// var foo = require('../config.js');

var express = require('express');
var app = express();
var mysql = require('mysql');
var model = require('../model/boat.js');

app.use(express.static('www'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(require('express-ejs-layouts'))

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.25.199', //172.16.240.20
  port     : 3306,
  user     : 'Fishack',
  password : 'P@$$w0rd'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();

app.get('/test', function(req, res) {
	model.getBoats(function(err, rows) {
		res.render('index', {solution: rows[0].solution});
	});
});

var server = app.listen(GLOBAL.config.port);
