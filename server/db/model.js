const db = require('./config');

module.exports = {
    // all methods return a promise
    // getters resolve with -> [{...}, {...}, ...]
  news: {
    fetchAll() {
      return db.News.findAll()
        .then((data) => data)
        .catch((err) => {
          console.log('Error fetching all data: ', err);
        });
    },
    // getByTitle(title) {
    //   return db('news').where('title', title)
    //   .catch(err => console.log(`Error getting record by title ${err}`));
    // },

    // Build test queries here:
    test(req, res, next) {
      const geo = req.body;
      // loc should be object {lat, lng, rad}
      console.log('loc object recevied by testGetByLocation: ', geo);
      const getByLocation = (loc) => {
        console.log(db.sequelize.fn(`*, (3959 * acos(cos(radians(${loc.lat})) * cos(radians(lat)) * cos(radians(lng) - radians(${loc.lng})) + sin(radians(${loc.lat})) * sin(radians(lat)))) as distance`));
      };
      getByLocation(geo)
        .then((results) => console.log('Results of getByLocation: ', results))
        .catch((err) => res.send('Error getting vals: ', err));
    },

    getByLocation(loc) {
      return db.News.findAll({
        where: {
          queryLoc: loc
        }
      })
      .catch((err) => console.log('Error fetching loc data: ', err));
    },
    add(data) {
      // expects data to be formatted as
      // {title: '', rating: num, category: '', ...etc}
      // can take an array of data objects -> [{...}, {...}, ...]
      // resolves promise with id of first inserted record -> [id]
      // return db('news').insert(data, 'id')
      // .catch(err => console.log(`Error inserting into "news" table`
      //   // `${err}`
      //   ));
      return db.News.bulkCreate(data, { ignoreDuplicates: true })
        .then((dbRes) => {
          // Only return articles that have:
          // Instance.dataValues.isNewRecord: true
          // console.log('Data returned from bulkCreate: ', dbRes);
        })
        .catch((err) => {
          console.log('Error with bulkCreate: ', err);
        });
    }
  }
};
