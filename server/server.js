const path = require('path');

const express = require('express');

const app = express();

require('./config/middleware')(app, express);

app.use(express.static(path.join(__dirname, '../client')));

require('./config/routes')(app, express);

const port = process.env.PORT;
// const port = 3000;

app.listen(port);

module.exports = app;
