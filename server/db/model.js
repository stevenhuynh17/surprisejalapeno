const db = require('./config');

module.exports = {
  news: {
    fetchAll() {
      return db.select().from('news')
      .catch(err => console.log(`Error fetching data from "news" table ${err}`));
    },
    add(data) {
      // expects data to be formatted as {title: '', rating: num, category: '', etc}
      // resolves promise with id of inserted record
      return db('news').insert(data, 'id')
      .catch(err => console.log(`Error inserting into "news" table ${err}`));
    }
  }
};
