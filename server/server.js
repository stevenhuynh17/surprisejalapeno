const express = require('express');

const app = express();

require('./config/middleware')(app, express);

require('./config/routes')(app, express);

const port = process.env.PORT;


app.listen(port);

module.exports = app;
