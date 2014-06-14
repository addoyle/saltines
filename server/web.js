// var foo = require('../config.js');

var express = require('express');
var app = express();
var mysql = require('mysql');
var model = require('../model/boat.js');

app.use(express.static('www'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(require('express-ejs-layouts'))

app.get('/test', function(req, res) {
	model.getBoats(function(err, rows) {
		res.render('index', {solution: rows[0].solution});
	});
});

app.get('/', function(req, res) {
	console.log(req);
	var id = req.query.id || 12345678911;

	model.getBoat(id, function(err, rows) {
		if (!err) {
			res.render('index', {boat: rows[0]});
		} else {
			res.render('unscanned');
		}
	});
});

var server = app.listen(GLOBAL.config.port);
