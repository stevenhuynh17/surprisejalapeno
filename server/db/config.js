exports = require('knex')({
  client: 'mysql',
  connection: {
    host: '104.131.138.11',
    user: 'app',
    password: 'surprisejalapeno',
    database: 'app'
  },
  pool: {
    min: 1,
    max: 5
  }
});
