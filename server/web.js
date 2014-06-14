// var foo = require('../config.js');

var config = {web: {port: 8080}};

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
});

var server = app.listen(config.web.port, function() {
	console.log('Web service listening on port '+config.web.port)
});