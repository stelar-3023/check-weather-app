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
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url =
//   'http://api.weatherstack.com/current?access_key=1b37b5aa71d040e6e7ad3b8f0f8f01cf&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response)
//   // const data = JSON.parse(response.body);
//   // console.log(data.current)

//   if (error) {
//     console.log('Unable to connect to weather service');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]}. It's currently ${response.body.current.temperature} degrees out.  It feels like ${response.body.current.feelslike} degrees out.`
//     );
//   }

//   // console.log(response.body.current)
// });

// Geocoding
// Address -> Lat/Long -> Weather
// const geocodeURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Nashville.json?access_token=pk.eyJ1Ijoic2xhcnNlbi0zIiwiYSI6ImNsM2M0bHQyaTAwaTMzZXFpaTR3MDM5MmQifQ.7S7dvjAiXY5pcaAvQeN92w&limit=1';

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to location service');
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search.');
//   } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }
// });

// const geocode = (address, callback) => {
//   const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2xhcnNlbi0zIiwiYSI6ImNsM2M0bHQyaTAwaTMzZXFpaTR3MDM5MmQifQ.7S7dvjAiXY5pcaAvQeN92w&limit=1'

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback('Unable to connect to location service', undefined)
//     } else if (response.body.features.length === 0) {
//       callback('Unable to find location. Try another search.', undefined)
//     } else {
//       const latitude = response.body.features[0].center[0];
//       const longitude = response.body.features[0].center[1];
//       const location = response.body.features[0].place_name;
//       callback(undefined, {
//         latitude: latitude,
//         longitude: longitude,
//         location: location
//       })
//     }
//   })
// }

// geocode('Boston', (error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
// })


// const forecast = (latitude, longitude, callback) => {
//   const url = 'http://api.weatherstack.com/current?access_key=1b37b5aa71d040e6e7ad3b8f0f8f01cf&query=' + latitude + ',' + longitude + '&units=f'

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback('Unable to connect to weather service', undefined)
//     } else if (response.body.error) {
//       callback('Unable to find location', undefined)
//     } else {
//       callback(undefined, response.body.current.weather_descriptions[0] + '. It\'s currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
//   })
// }

forecast(18.5601, 68.3725, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})