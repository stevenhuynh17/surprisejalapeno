const path = require('path');
const express = require('express');
const db = require('./db/config');

const app = express();

require('./config/middleware')(app, express);

app.use(express.static(path.join(__dirname, '../client')));

require('./config/routes')(app, express);

const port = process.env.PORT;
// const port = 3000;

app.listen(port, () => console.log('Listening on port', port));

module.exports = app;
