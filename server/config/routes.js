const news = require('../api_controllers/news');
const testModelCtrl = require('../db/model');

module.exports = (app) => {
  app.get('/', (req, res) => res.send('Hello world!'));
  // expects the URI to have a query parameter
  app.get('/query', news.handleSearch);
  // Test model.js queries to the database endpoint
  app.post('/test-query', testModelCtrl.news.test);
};
