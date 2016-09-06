const helper = require('../api_helpers/feedzilla');

const db = obj => { console.log('Adding ,', obj, ' to the db.'); };

function moveStoriesToDb() {
  helper.getStories.then(
    data => db(data)
  );
}

exports.moveStoriestoDb = moveStoriesToDb;
