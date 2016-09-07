const bing = require('../api_controllers/bing');

module.exports = (app) => {
  app.get('/', (req, res) => res.send('Hello world!'));
  app.get('/query', bing.searchHandler);
};
