// var foo = require('../config.js');

var config = {web: {port: 8080}};

var express = require('express');
var app = express();

app.use(express.static('www'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(require('express-ejs-layouts'))

app.get('/test', function(req, res) {
	res.render('index');
});

var server = app.listen(config.web.port);