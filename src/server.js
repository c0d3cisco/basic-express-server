'use strict';

require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.get('/person', (req, res, next) => {
  req.query.name
    ? res.status(200).json({ name: req.query.name })
    : res.status(500).send('Error: no name query presented');
});

const start = (port) => app.listen(port, () => console.log('Server is listening in', port));
// app.listen(process.env.PORT);

module.exports = { start, app };
