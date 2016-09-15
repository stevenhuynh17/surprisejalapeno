const helpers = require('../api_helpers/general');
// queryString is part of https://www.npmjs.com/package/request
const qs = require('querystring');
const keys = require('./../../env/config');

// given a placename, returns all news articles with that entity in the title
// and body
const getByPlace = (place) => {
  // console.log('getByPlace sherlock.js query builder input: ', place);

  // Base Alchemy News API endpoint
  let qUrl = 'https://gateway-a.watsonplatform.net/calls/data/GetNews';

  // Configure all of the individual queries for querying the endpoint
  // See the alchemy news api for what options are available
  let queries = {
    outputMode: 'json',
    start: 'now-1d',
    dedup: 1,
    dedupThreshold: 1.0,
    end: 'now',
    // count: 5, // count is how many watson returns
    // HOWEVER, they will charge many more transactions
    // Based on what they FIND
    return: 'enriched.url.title,'
      + 'enriched.url.text,'
      + 'enriched.url.url,'
      + 'enriched.url.entities,'
      + 'enriched.url.publicationDate.date,'
      + 'enriched.url.keywords,',
    apikey: keys.watsonAPI
  };

  // Turn all of the queries into a query string
  queries = qs.stringify(queries);

  // Append the queries to the base url
  qUrl = `${qUrl}?${queries}`;

  // Append the entity search to the base url.
  qUrl += `&q.enriched.url.entities.entity=|text=${place},type=City|`;
  // return a promise from the helpers geturl function
  return helpers.getUrl(qUrl).then(d => {
    const resp = JSON.parse(d);

    if (resp.status !== 'OK') {
      console.log('Status is, ', resp);
      console.log('Bad response from watson for query, ', place);
    }

    return resp.result;
  });
};

exports.getByPlace = getByPlace;
