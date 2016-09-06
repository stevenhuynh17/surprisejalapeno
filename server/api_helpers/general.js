const request = require('request');

const Promise = require('bluebird');

// generic URL helper function
// sends a get request to the passed URL
// and returns a promise that will be fulfilled
// with the body
function getUrl(url) {
  return new Promise((fulfill, reject) => {
    request.get(url, (err, data) => {
      if (err) reject(err);
      else fulfill(data.data);
    });
  });
}
exports.getUrl = getUrl;
