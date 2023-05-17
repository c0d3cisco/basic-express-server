'use strict';

module.exports = (req, res, next) => {

  if( req.query.name === '' ){
    next('Value must be provided');
  } else if( req.query.name ) {
    next();
  } else {
    next(`Query key must be 'name'`);

  }
};
