const config = require('../../env/config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'app_test',
  'root',
  'thisIsSomeNextLevelStuff',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

const News = sequelize.define('news', {
  article_id: { type: Sequelize.STRING, unique: true },
  title: { type: Sequelize.STRING },
  rating: { type: Sequelize.STRING },
  description: { type: Sequelize.TEXT('long') },
  url: { type: Sequelize.STRING },
  published: { type: Sequelize.STRING },
  lat: { type: Sequelize.DECIMAL(10, 8) },
  lng: { type: Sequelize.DECIMAL(11, 8) },
  timeestamps: true
});

sequelize.sync()
  .then(() => {

  });

module.exports = News;
// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: 'localhost',
//     user: 'root',
//     password: 'thisIsSomeNextLevelStuff',
//     database: 'app_test'
//   },
//   pool: {
//     min: 1,
//     max: 5
//   }
// });

// knex.schema.hasTable('news').then(result => {
//   if (!result) {
//     return knex.schema.createTable('news', table => {
//       // TODO: Make increments UUID from watson
//       table.increments();
//       table.string('article_id').unique();
//       table.string('title');
//       table.string('rating');
//       // table.string('category');
//       table.text('description', 'longtext');
//       // table.string('source');
//       table.string('url');
//       table.string('published');
//       table.decimal('lat', 10, 8);
//       table.decimal('lng', 11, 8);
//       table.timestamp('created_at');
//     });
//   }
//   return 0;
// });

// module.exports = knex;
