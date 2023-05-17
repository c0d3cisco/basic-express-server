'use strict';

//Performs a console.log with the request method and path
const logger = (req, res, next) => {

  console.log(`Method: ${req.method}`);
  console.log(`Path: ${req.path}`);

  next();
};

module.exports = logger;
