const news = require('../api_controllers/news');

module.exports = (app) => {
  app.get('/', (req, res) => res.send('Hello world!'));
  app.get('/query', news.handleSearch); // expects the URI to have a query parameter
};
