const morgan = require('morgan');
const path = require('path');

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../client')));
};
