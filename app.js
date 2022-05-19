// console.log('Starting');

// setTimeout(() => {
//   console.log('2 second timer');
// }, 2000);

// setTimeout(() => {
//   console.log('0 second timer');
// }, 0);

// console.log('Stopping');

// Call Stack => Node APIs => Event Loop => Callback Queue

const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=1b37b5aa71d040e6e7ad3b8f0f8f01cf&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  // console.log(response)
  // const data = JSON.parse(response.body);
  // console.log(data.current)

  // console.log(response.body.current)
  console.log(
    `${response.body.current.weather_descriptions[0]}. It's currently ${response.body.current.temperature} degrees out.  It feels like ${response.body.current.feelslike} degrees out.`
  );
});

// Geocoding
// Address -> Lat/Long -> Weather
const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Nashville.json?access_token=pk.eyJ1Ijoic2xhcnNlbi0zIiwiYSI6ImNsM2M0bHQyaTAwaTMzZXFpaTR3MDM5MmQifQ.7S7dvjAiXY5pcaAvQeN92w&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
  console.log(response.body.features[0].center);
});
