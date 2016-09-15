const db = require('./config');

module.exports = {
    // all methods return a promise
    // getters resolve with -> [{...}, {...}, ...]
  news: {
    fetchAll() {
      return db.select().from('news')
      .catch(err =>
          console.log(`Error fetching data from "news" table ${err}`));
    },
    getByTitle(title) {
      return db('news').where('title', title)
      .catch(err => console.log(`Error getting record by title ${err}`));
    },
    getByLocation(loc) {
      // expect loc to be formatted as {lat, lng, rad} where rad = radius in
      // miles to search within using Haversine Formula to calculate distances
      // returns results in order of increasing distance from loc also return a
      // "distance" property that represents the entity's distance from the
      // midpoint
      console.log('Input values to getByLocation in model.js: ', loc);
      return db
      // .select(db.raw(`*, (
      //   3959 * acos(cos(radians(${loc.lat})) * cos(radians(lat)) *
      //   cos(radians(lng) - radians(${loc.lng})) + sin(radians(${loc.lat})) *
      //   sin(radians(lat)))
      //   ) as distance`
      // ))
      .select(db.raw('*'))
      .from('news')
      // .having('distance', '<', loc.rad)
      // .orderBy('distance', 'asc')
      // .limit(100)
      .catch(err => console.log('Error getting by location', err));
    },
    add(data) {
      // expects data to be formatted as
      // {title: '', rating: num, category: '', ...etc}
      // can take an array of data objects -> [{...}, {...}, ...]
      // resolves promise with id of first inserted record -> [id]
      return db('news').insert(data, 'id')
      .catch(err => console.log(`Error inserting into "news" table ${err}`));
    }
  }
};
