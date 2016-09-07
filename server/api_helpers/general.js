const request = require('request');

const Promise = require('bluebird');

// generic URL helper function
// sends a get request to the passed URL
// and returns a promise that will be fulfilled
// with the body
function getUrl(url, headers) {
  return new Promise((fulfill, reject) => {
    const options = {
      method: 'GET',
      url,
      headers
    };
    request(options, (err, response, body) => {
      console.log(`Err, ${err} , response, ${response} , body, ${body}`);
      if (err) reject(err);
      else fulfill(body);
    });
  });
}
exports.getUrl = getUrl;
