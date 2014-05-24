/*
* for the weather.
*/
var Forecast = require('forecast');
var sc = require('soundclouder');


var forecast = new Forecast({
  service: 'forecast.io',
  key: 'f81f668a0d812e2bd5fb5b2783f62071',
  units: 'celcius', // Only the first letter is parsed
  cache: true,      // Cache API requests?
  ttl: {           // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/
    minutes: 27,
    seconds: 45
  }
});


module.exports = function(app, passport, isLoggedIn){

app.get('/api/getWeather', isLoggedIn, function(req, res) {
  // Retrieve weather information from coordinates (Sydney, Australia)
  var lat = 58.5888;
  var long = 16.1835;
  
  forecast.get([lat, long], function(err, weather) {
    if(err) console.dir(err);
    else res.send(weather);
  });

});




};
