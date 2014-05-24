//soundclouder.js


var cliendID = "41a019542ba762188a8221087325962d";
var cliendSecret = "14f008ae5b2f6fdb37c29f16b9350363";
var redirectURL = "http://localhost:3000/";

var endUserAuthorization = "https://soundcloud.com/connect";

var token = "https://api.soundcloud.com/oauth2/token";


module.exports = function(soundclouder) {
	soundclouder.init(cliendID, cliendSecret, redirectURL);

};

