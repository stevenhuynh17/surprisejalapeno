const news = require('../api_controllers/news');

module.exports = (app) => {
  app.get('/', (req, res) => res.send('Hello world!'));
  // expects the URI to have a query parameter
  app.get('/query', news.handleSearch);
};
