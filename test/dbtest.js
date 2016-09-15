const expect = require('chai').expect;
const db = require('../server/db/test-config');

const testData = [
  {
    title: 'Test',
    rating: 9000,
    lat: 45.304369,
    lng: -121.754757,
    category: 'Fake',
    description: '...it\'s a test',
    source: 'Al Jazeera',
    url: 'www.test.com',
    published: '2016-09-07T21:59:00'
  },
  {
    title: 'Another test',
    rating: 9001,
    lat: 45.2829345,
    lng: -121.796824,
    category: 'Fake',
    description: 'yet another test',
    source: 'The Onion',
    url: 'www.test123.com',
    published: '2016-09-07T22:16:00',
  }
];

describe('MySQL DB', () => {
  beforeEach((done) => {
    db.schema.hasTable('news').then((result) => {
      if (!result) {
        setTimeout(done, 1000);
      } else {
        db.raw('DELETE from news')
          .then((e) => done())
          .catch(err => console.log('ERROR', err) || done(err));
      }
    });
  });

  const model = {
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
      return db
      .select(db.raw(`*, (
        3959 * acos(cos(radians(${loc.lat})) * cos(radians(lat)) *
        cos(radians(lng) - radians(${loc.lng})) + sin(radians(${loc.lat})) *
        sin(radians(lat)))
        ) as distance`
      ))
      .from('news')
      .having('distance', '<', loc.rad)
      .orderBy('distance', 'asc')
      .limit(100)
      .catch(err => console.log(`Error getting records by location ${err}`));
    },
    add(data) {
      return db('news').insert(data, 'id')
      .catch(err => console.log(`Error inserting into "news" table ${err}`));
    }
  };

  it('should take data and insert it into a table', done => {
    model.add(testData[0]).then(id => {
      expect(id).to.be.above(0);
      done();
    });
  });

  it('should return all data in a table', done => {
    model.add([testData[0], testData[1]])
    .then(() => model.fetchAll())
    .then(result => {
      expect(result).to.have.lengthOf(2);
      done();
    });
  });

  it('should return records by title', done => {
    model.add(testData[1])
    .then(() => model.getByTitle('Another test'))
    .then(result => {
      expect(result).to.have.lengthOf(1);
      expect(result[0].title).to.equal('Another test');
      done();
    });
  });

  it('should return records whose distance is within a certain radius of a location', done => {
    // distance from loc to testData[0] ~ 0.984 miles
    // distance from loc to testData[1] ~ 1.614 miles
    model.add([testData[0], testData[1]])
    .then(() => model.getByLocation({ lat: 45.2929345, lng: -121.766824, rad: 1 }))
    .then(result => {
      expect(result).to.have.lengthOf(1);
      expect(result[0].title).to.equal('Test');
      done();
    });
  });
});
