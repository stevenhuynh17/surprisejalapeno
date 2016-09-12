// const bing = require('./bing');

const sherlock = require('../api_helpers/sherlock');

const model = require('../db/model');

const goog = require('../api_helpers/goog');


/*
function resultsToDb(results) {
  // trim results to the appropriate format
  // toss some geocoding on them
  return model.add(results);
}

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
  console.log(`Handle search with location ${location}`);
  sherlock.getByPlace(location).then(d => model.news.add(d).then(
      () => {
        model.news.getByLocation(locResult) // this needs to be geocoded
      .then(dbResponse => res.json(dbResponse));
      }
  ))
    .catch(e => next(e));
}

exports.handleSearch = handleSearch;
