const config = require('../../env/config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'app_test',
  'root',
  '',
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
  sentiment: { type: Sequelize.STRING },
  url: { type: Sequelize.STRING },
  published: { type: Sequelize.STRING },
  lat: { type: Sequelize.DECIMAL(10, 8) },
  lng: { type: Sequelize.DECIMAL(11, 8) },
});

News.sync();

module.exports = News;
