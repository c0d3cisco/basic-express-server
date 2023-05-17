'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');


app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Server is operational'));

app.use(logger);

app.get('/person', validator, (req, res , next) => {
  // req.query.name ?
  //   res.status(200).json({ name: req.query.name })
  //   : res.status(500).send('Error: no name query presented');
  res.status(200).json({ name: req.query.name });
});

app.use('*', error404);

app.use(error500);


const start = (port) => app.listen(port, () => console.log('Server is listening in', port));
// app.listen(process.env.PORT);

module.exports = { start, app };
