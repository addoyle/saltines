var db = require('./db.js');

module.exports = {
	getName: function(id, callback) {
		db.query('SELECT User_Name, NFC_ID FROM `fishackathon`.`user_data` WHERE NFC_ID = ' + id + ';', callback);
	}
	
	getBoat: function(id, callback) {
		db.query('SELECT name, owner FROM `fishackathon`.`ship_info` WHERE owner =' id ';', callback);
	}
}
