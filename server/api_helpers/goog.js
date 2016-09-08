const google = require('googleapis');

const geocoder = new google.maps.Geocoder();

// const gCloud = require('google-cloud');
// returns a promise that will (hopefully) be fulfilled by the Google API

function geocode(text) {
  const key = process.env.googleGeocode;
  return new Promise((fulfill, reject) => {
    console.log('Trying to geocode, ', text);
    geocoder({ address: text, key }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        fulfill(results);
      } else {
        reject(status);
      }
    });
  });
}

exports.geocode = geocode;
