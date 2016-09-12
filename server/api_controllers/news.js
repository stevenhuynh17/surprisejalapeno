// const bing = require('./bing');

const sherlock = require('../api_helpers/sherlock');

const model = require('../db/model');

const goog = require('../api_helpers/goog');


function getGeo(ent) {
    let max = 0;
    let geo = { lat: 0, lng: 0 };
    ent.forEach( e => {
      if (e.disambiguated.geo && e.relevance > max) {
        max = e.relevance;
        let inter = e.disambiguated.geo.split(' ');
        geo.lat = parseFloat(inter[0]);
        geo.lng = parseFloat(inter[1]);
      }
    });
    console.log('Got geo, ', geo);
    return geo;
}

function resultsToDb(results) {
  // trim results to the appropriate format
  const toAdd = results.docs.map( doc => {
    doc = doc.source;
    const geo = getGeo(doc.enriched.url.entities);
    return {
      category: doc.keywords,
      title: doc.enriched.url.title,
      description: doc.enriched.url.text,
      url: doc.original.url,
      lat: geo.lat,
      lng: geo.lng
    };
  });
  return model.news.add(toAdd);
}

/*
function searchAndAdd(query) {
  return bing.search(query).then( // assumes that the results back from bing are correctly formatted
      d => resultsToDb(d)
  );
}

function handleSearch(req, res, next) {
  const location = goog.geocode(req.params.q);
  searchAndAdd(req.params.q).then(() => res.json(model.getByLocation(location)))
  .catch(e => next(e));
}
*/

function handleSearch(req, res, next) {
  const location = req.query.q;
  const locResult = goog.geocode(location); // probably needs to get parsed into lat/long
  sherlock.getByPlace(location).then(d => resultsToDb(d)).then(
      () => {
        model.news.getByLocation(locResult) // this needs to be geocoded
      .then(dbResponse => res.json(dbResponse));
      }
  )
    .catch(e => next(e));
}

exports.handleSearch = handleSearch;
