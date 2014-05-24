
/*** Databas settings 
	Username :  bertosvanner
	password :  berto123

	Settings för DB 
	Username: soundforecast
	pw 		: berto123
**/


// Bring Mongoose into the app
var mongoose = require('mongoose');

//Build the connection string
var dbURI = "mongodb://soundforecast:berto123@ds051838.mongolab.com:51838/soundforecast"

//"mongodb://localhost/summer-app";

module.exports = {
	url : dbURI,
	mongoose : mongoose
};




//CONNECTION EVENTS
// When establashing successful connection
mongoose.connection.on('connected', function () {
	console.log("Mongoose default connection open to " + dbURI);
});

//If connection fails and throws an error
mongoose.connection.on('error', function(err){
	console.log('Mongoose default connection error: ' + err);
});

//If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection disconnected throuh app termination');
		process.exit(0);
	});
});

//LOAD SCHEMAS & MODELS

