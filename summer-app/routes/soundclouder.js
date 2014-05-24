//routes/soundclouder.js

var SoundCloudAPI = require("soundcloud-node");
// instantiate the client

var cliendID = "41a019542ba762188a8221087325962d";
var cliendSecret = "14f008ae5b2f6fdb37c29f16b9350363";
var redirectURL = "http://localhost:3000/";
var http = require('http');

var client = new SoundCloudAPI(cliendID, cliendSecret, redirectURL);


module.exports = function(app, soundclouder, isLoggedIn){

	/*
		write tags on form:
		single tag: tag1
		multiple tags: tag1,tag2,tag3 (...)
	*/
	app.get('/api/soundcloud/:tags', isLoggedIn, function(req,res) {
 		var tagUrlPath = '&tags='+ req.param("tags");
		soundcloudRequestByUrl(res, "/tracks.json?client_id=" + cliendID + tagUrlPath);
		
	  	
  	});

  	app.get('/api/getSound4CastPlayList', isLoggedIn, function (req, res) {
		console.log("Inside getSound4CastPlayList");
		client.get('/tracks', function (data) {
		   	console.log("Inside getSound4CastPlayList");
		    console.log(data);

		});
		res.send({"hej" : "du"});
  		
  	});

}

function soundcloudRequestByUrl (res, path, callback) {
	//path example path = '/tracks.json?client_id=41a019542ba762188a8221087325962d'
	console.log(path);
	var options = {
		    host : 'api.soundcloud.com',
		    path : path,
		    port : 80,
		    method : 'GET'
	  	}
		var request = http.request(options, function(response){
		    var body = ""
		    response.on('data', function(data) {
		      body += data;
		    });
		    response.on('end', function() {
		    console.log(body.id);
		      res.send(JSON.parse(body));
		    });
		  });
		  request.on('error', function(e) {
		    console.log('Problem with request: ' + e.message);
		  });
		  request.end();
}

