const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../client')));
  app.use(bodyParser.json());
};
