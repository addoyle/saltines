var db = require('./db.js');

module.exports = {
	getName: function(id, callback) {
		db.query('SELECT User_Name, NFC_ID, License_Type, Suspended FROM `fishackathon`.`user_data` WHERE NFC_ID = ' + id + ';', callback);
	},
	
	getBoat: function(id, callback) {
		db.query("SELECT name, owner FROM ship_info WHERE owner = '" + id + "';", callback);
	},
	
	getFish: function(id, callback) {
		db.query("SELECT species, COUNT(*) as count FROM fish_info WHERE fisherman = '" + id + "';", callback);
	}
};
