
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');


var passport = require('passport');
var db = require('./config/db'); //Database configuration
var app = express();

var soundclouder = require("soundclouder"); // soundclouder module that is connected to soundcloud


// Configuration =============================================================
db.mongoose.connect(db.url); //Connect to database
require('./config/passport')(passport); // pass our passport object for configuration before using it!
require('./config/soundclouder')(soundclouder);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.locals.delimiters = '<% %>'; // So hogan '{{}}' doesn't mess up angulars '{{}}'
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components')); // This can be loaded through the html files by refering to src="/bower_components/*"



app.configure(function() {
	app.use(express.cookieParser()); // read cookies (nneded for auth)
	app.use(express.bodyParser()); // get information from html forms

	// required for passport
	app.use(express.session({ secret : 'somethingsomethingneedstobementioned'}));
	app.use(passport.initialize());
	app.use(passport.session());
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes/index.js')(app, passport, soundclouder); // load or routes and passes app and configured passport

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
