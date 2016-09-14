const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'app_test'
  }
});

knex.schema.hasTable('news').then(result => {
  if (!result) {
    return knex.schema.createTable('news', table => {
      table.increments();
      table.string('title');
      table.integer('rating');
      table.decimal('lat', 10, 8);
      table.decimal('lng', 11, 8);
      table.string('category');
      table.string('description');
      table.string('source');
      table.string('url');
      table.dateTime('published');
      table.timestamp('created_at');
    });
  }
  return 0;
});

module.exports = knex;
