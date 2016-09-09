const request = require('request');

// given a placename, returns all news articles with that entity in the title
// and body
function getByPlace(place) {
  const getUrl = 'https://gateway-a.watsonplatform.net/calls/data/GetNews';
  const queries = {
    outputMode: 'json',
    start: 'now-1d',
    end: 'now',
    count: 25,
    'q.enriched.url.enrichedTitle.entities.entity': `|text=${place},type=place|`,
    return: 'enriched.url.title',
    apikey: process.env.alchemy
  };
  return new Promise((fulfill, reject) => {
    request({ url: getUrl, options: queries }, (err, response) => {
      if (err) reject(err);
      else fulfill(response);
    });
  });
}

exports.getByPlace = getByPlace;
