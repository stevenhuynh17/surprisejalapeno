const db = require('./config');

exports = {
  news: {
    fetch() {
      // TODO
    },
    add(data) {
      // expects data to be formatted as {title: '', rating: num, category: '', etc}
      db('news').insert(data)
      .catch(err => console.log(`Error inserting into "news" table ${err}`));
    }
  }
};
