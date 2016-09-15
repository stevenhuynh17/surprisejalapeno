const google = require('@google/maps');
const key = require('./../../env/config');
// Expects the googleGeocode environment variable to be set
const googleMapsClient = google.createClient({
  key: key.googGeoAPI
});

// Given some text, returns a promise that will be fulfilled by the
// google geocode api. The return object is much more complex than I expected it
// to be.
function geocode(text) {
  console.log('goog.geocode input: ', text);
  return new Promise((fulfill, reject) => {
    googleMapsClient.geocode({ address: text }, (err, response) => {
      if (err) {
        console.log('Error with googleMaps: ', err);
        reject(err);
      } else {
        console.log('received response from googleMaps: ', response);
        fulfill(response);
      }
    });
  });
}

exports.geocode = geocode;
