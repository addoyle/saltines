require('../config.js');

var http = require('http');
var tropo_webapi = require('tropo-webapi');

console.log('SMS Service listening on port '+config.sms.port);
var server = http.createServer(function(req, res) {
	var tropo = new TropoWebAPI();

	tropo.say('Got it!');

	response.end(TropoJSON(tropo));

}).listen(config.sms.port);