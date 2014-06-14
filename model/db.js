var mysql = require('mysql');

var config = GLOBAL.config;

module.exports = {
	__db: mysql.createConnection(GLOBAL.config.db),

	query: function(sql, callback) {
		this.__db.connect();
		this.__db.query(sql, callback);
		this.__db.end();
	}
};