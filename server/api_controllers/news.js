// const bing = require('./bing');

const sherlock = require('../api_helpers/sherlock');

// const goog = require('../api_helpers/goog');

// const model = require('../db/model');

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
  const location = req.params.q;
  sherlock.getByLocation(location).then(d => res.json(d))
    .catch(e => next(e));
}

exports.handleSearch = handleSearch;
