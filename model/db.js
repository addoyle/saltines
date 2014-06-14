var mysql = require('mysql');

var config = GLOBAL.config;

module.exports = {
	__db: (function() {
		var dbInstance = mysql.createConnection(GLOBAL.config.db);
		dbInstance.connect();
		return dbInstance;
	})(),

	query: function(sql, callback) {
		// this.__db.connect();
		this.__db.query(sql, callback);
		// this.__db.end();
	}
};