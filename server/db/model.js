const db = require('./config');

module.exports = {
    // all methods return a promise
    // getters resolve with -> [{...}, {...}, ...]
  news: {
    fetchAll() {
      return db.select().from('news')
      .catch(err => console.log(`Error fetching data from "news" table ${err}`));
    },
    getByTitle(title) {
      return db('news').where('title', title)
      .catch(err => console.log(`Error getting record by title ${err}`));
    },
    getByLocation(loc) {
      return db('news').where('location', loc).orderBy('rating', 'desc')
      .catch(err => console.log(`Error getting records by location ${err}`));
    },
    add(data) {
      // expects data to be formatted as {title: '', rating: num, category: '', ...etc}
      // can take an array of data objects -> [{...}, {...}, ...]
      // resolves promise with id of first inserted record -> [id]
      return db('news').insert(data, 'id')
      .catch(err => console.log(`Error inserting into "news" table ${err}`));
    }
  }
};
