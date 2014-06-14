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
	var id = req.query.id || 66987326581;

	model.getName(id, function(err, users) {
		model.getBoat(id, function(err, ships) {
			model.getFish(id, function(err, fishes) {
				if (!err) {
					var status;
					if (users[0].License_Type != 0 && users[0].Suspended == 0){
						status = 'Good';
					}
					else if (users[0].Suspended == 0){
						status = 'Suspended';
					}
					else {
						status = 'Invalid';
					}

					res.render('index', {user: users[0], ship: ships[0], fish: fishes[0], status: status});
				} else {
					res.render('error');
				}
			});
		});
	});
});

app.post('/register', function(req, res) {
	model.registerBoat(req.body, function(err, rows) {
		res.render('thankyou');
	});
});

var server = app.listen(GLOBAL.config.port);
