const helpers = require('./general');

const apiUrl = 'http://api.feedzilla.com/v1/';

// Accepts no arguments and returns a list of the 100 most recent stories
function getStories() {
  return helpers.getUrl(apiUrl);
}

// Accepts a search string and returns a promise
// fulfilled with an array of most recent news stories from Feedzilla
// Query URL is formatted a la:
//  http://api.feedzilla.com/v1/articles/search.json?q=Michael"
function searchStories(search) {
  const qUrl = `${apiUrl} articles/search.json?q= ${search}`;
  return helpers.getUrl(qUrl);
}

exports.searchStories = searchStories;
exports.getStories = getStories;
