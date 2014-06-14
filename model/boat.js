var db = require('./db.js');

module.exports = {
	getBoats: function(callback) {
		db.query('select 1 as solution', callback);
	}
}