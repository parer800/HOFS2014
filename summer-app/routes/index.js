
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });

/*
 * for the weather.
 */
  var Forecast = require('forecast');
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

  app.get('/api/weather', function(req, res) {
    // Retrieve weather information from coordinates (Sydney, Australia)
    forecast.get([58.58, 16.17], function(err, weather) {
      if(err) console.dir(err);
      else res.send(weather);
    });

  });





};
