// var foo = require('../config.js');

var config = {web: {port: 8080}};

var express = require('express');
var app = express();

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
	res.render('index');
});

var server = app.listen(config.web.port);