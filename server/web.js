// var foo = require('../config.js');

var express = require('express');
var app = express();
var mysql = require('mysql');
var model = require('../model/query.js');
var bodyParser = require('body-parser');

app.use(express.static('www'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(require('express-ejs-layouts'))
app.use(bodyParser.urlencoded());

//app.get('/test', function(req, res) {
//	model.getBoats(function(err, rows) {
//		res.render('index', {solution: rows[0].solution});
//	});
//});

app.get('/', function(req, res) {
	var id = req.query.id || 66987326581;

	// model.getName(id, function(err, users) {
	// 	model.getBoat(id, function(err, ships) {
	// 		model.getFish(id, function(err, fishes) {
	// 			if (!err) {
	// 				var status;
	// 				if (users[0].License_Type != 0 && users[0].Suspended == 0){
	// 					status = 'Good';
	// 				}
	// 				else if (users[0].Suspended == 0){
	// 					status = 'Suspended';
	// 				}
	// 				else {
	// 					status = 'Invalid';
	// 				}

	// 				res.render('index', {user: users[0], ship: ships[0], fishes: fishes, status: status});
	// 			} else {
	// 				res.render('error');
	// 			}
	// 		});
	// 	});
	// });

	res.render('index', {status: 'Good', user: {User_Name: 'Andy Doyle'}, fishes: [{species: 'Herp derp', weight: 100, count: 100}]})
});

app.get('/register', function(req, res) {
	res.render('register');
});

app.post('/register', function(req, res) {
	model.postUserAndBoat(req.body, function(err, rows) {
		res.render('thankyou');
	});
});

app.get('/fishquota', function(req, res) {
	res.render('fishquota');
});

app.get('/fishinfo', function(req, res) {
	res.render('fishinfo');
});

app.get('/report', function(req, res) {
	res.render('report');
});

var server = app.listen(GLOBAL.config.port);
