const helpers = require('../api_helpers/general');

const creds = require('../config/creds');

const baseUrl = 'https://api.cognitive.microsoft.com/bing/v5.0/news/search';

function search(query) {
  let escapedQuery = query.split(' ').join('+');
  escapedQuery = escapedQuery + '!';
  const qUrl = `${baseUrl}?q=${escapedQuery}`;
  return helpers.getUrl(qUrl);
}

exports.search = search;
