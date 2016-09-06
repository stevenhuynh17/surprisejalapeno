const feedzilla = require('../api_controllers/feedzilla');

module.exports = (app) => {
  app.get('/', (req, res) => res.send('Hello world!'));
  app.get('/query', feedzilla.queryHandler);
};
