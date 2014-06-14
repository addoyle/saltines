var db = require('./db.js');

module.exports = {
	getName: function(id, callback) {
		db.query('SELECT User_Name, NFC_ID, License_Type, Suspended FROM `fishackathon`.`user_data` WHERE NFC_ID = ' + id + ';', callback);
	},
	
	getBoat: function(id, callback) {
		db.query("SELECT name, owner FROM ship_info WHERE owner = '" + id + "';", callback);
	},
	
	getFish: function(id, callback) {
		db.query("SELECT species, sum(weight) as weight, COUNT(*) as count FROM fish_info WHERE fisherman = '" + id + "';", callback);
	},
	
	postUserAndBoat: function(body, callback) {
		// console.log(body);
		var id = Math.floor(99999999999 * Math.random());
		db.query("INSERT INTO user_data (nfc_id, User_Name, Phone, Email, COO) VALUES ('"+id+"', '"+body.fisherman+"', '"+body.phone+"', '"+body.email+"', '"+body.country+"');", function(){
			db.query("INSERT INTO ship_info (owner, name, capacity, material, length, num_motors, gps) VALUES ('"+id+"', '"+body.name+"', '"+body.capacity+"', '"+body.material+"', '"+body.length+"', '"+body.motors+"', '"+body.gps+"');", callback);
		});
	}
}
