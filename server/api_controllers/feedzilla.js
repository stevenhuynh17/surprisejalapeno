const api = require('../api_helpers/feedzilla');

const db = obj => { console.log('Adding ,', obj, ' to the db.'); };


function queryHandler(req, res, next) {
    // get the query string
  const query = 'Hello';
  api.searchStories(query).then(data => {
    console.log('After query response, ', data);
    db(data);
            // .queryDB(query).then();
    res.json(data);
  }).catch(err => next(err));
}

queryHandler('a', 'b');

exports.queryHandler = queryHandler;
