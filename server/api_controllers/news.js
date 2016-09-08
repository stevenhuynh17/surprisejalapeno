const bing = require('./bing');

const goog = require('../api_helpers/goog');

const model = require('../db/model');

function resultsToDb(results) {
  // trim results to the appropriate format
  // toss some geocoding on them
  return model.add(results);
}

function searchAndAdd(query) {
  return bing.search(query).then(
      d => resultsToDb(d)
  );
}

function handleSearch(req, res, next) {
  const location = goog.geocode(req.params.q);
  searchAndAdd(req.params.q).then(() => res.json(model.getByLocation(location)))
  .catch(e => next(e));
}

exports.handleSearch = handleSearch;
