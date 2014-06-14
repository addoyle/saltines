// var foo = require('../config.js');

var express = require('express');
var app = express();
var mysql = require('mysql');
var model = require('../model/query.js');

app.use(express.static('www'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(require('express-ejs-layouts'))

//app.get('/test', function(req, res) {
//	model.getBoats(function(err, rows) {
//		res.render('index', {solution: rows[0].solution});
//	});
//});

app.get('/', function(req, res) {
	console.log(req);
	var id = req.query.id || 12345678911;

	model.getName(id, function(err, rows) {
		if (!err) {
			if (rows[0].License_Type != 0 && rows[0].Suspended == 0){
				res.render('index', {user_name: rows[0].User_Name});	
			}
			else if (rows[0].Suspended == 0){
				res.render('Suspended', {user_name: rows[0].User_Name});
			}
			else {
				res.render('Invalid', {user_name: rows[0].User_Name});
			}
		
		} else {
			res.render('unscanned');
		}
	});
	
	model.getBoat(id, function(err, rows) {
		if (!err) {
			res.render('index', {boat: rows[0].name, status: rows[0].});
		} else {
			res.render('unscanned');
		}
	});
	
	model.getFish(id, function(err, rows) {
		if (!err) {
			res.render('index', {count: rows.COUNT(*), species: rows.species });
		} else {
			res.render('unscanned');
		}
	});
});

var server = app.listen(GLOBAL.config.port);
