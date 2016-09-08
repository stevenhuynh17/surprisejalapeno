const bing = require('../api_controllers/bing');

module.exports = (app) => {
  app.get('/', (req, res) => res.send('Hello world!'));
  app.get('/query', bing.searchHandler); // expects the URI to have a query parameter
  // i.e. /query?q='dogs'
};
