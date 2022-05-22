const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=1b37b5aa71d040e6e7ad3b8f0f8f01cf&query=' +
    latitude +
    ',' +
    longitude +
    '&units=f';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It's currently " +
          response.body.current.temperature +
          ' degrees out. It feels like ' +
          response.body.current.feelslike +
          ' degrees out. There is a ' +
          response.body.current.precip +
          '% chance of rain.'
      );
    }
  });
};

module.exports = forecast;