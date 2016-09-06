const request = require('request');

const Promise = require('bluebird');

const apiUrl = 'http://api.feedzilla.com/v1/';

exports.getStories = function getStories() {
  return new Promise((fulfill, reject) => {
    request.get(apiUrl, (err, data) => {
      if (err) reject(err);
      else fulfill(data);
    });
  });
};
