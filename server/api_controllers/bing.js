const helpers = require('../api_helpers/general');

const creds = require('../config/creds');

const baseUrl = 'https://api.cognitive.microsoft.com/bing/v5.0/news/search';

function search(query) {
  let escapedQuery = query.split(' ').join('+');
  escapedQuery = encodeURIComponent(escapedQuery);
  const qUrl = `${baseUrl}?q=${escapedQuery}`;
  return helpers.getUrl(qUrl, creds.bing || { 'Ocp-Apim-Subscription-Key': process.env.bing });
}

function searchHandler(req, res, next) {
  search(req.query.q)
  .then(d => res.json(d))
  .catch(err => next(err));
}


exports.search = search;
exports.searchHandler = searchHandler;
