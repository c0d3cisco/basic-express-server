'use strict';


const validator = require('.'); //unit test

describe('Validator middleware', () => {
  let req = {};
  let res = {};
  let next = jest.fn();

  test('error - req has proper key "name', () => {
    req = { query: { test: '' } };
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith(`Query key must be 'name'`);
  });

  test('error - req must provide a value', () => {
    req = { query: {name: ''} };
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('Value must be provided');
  });

  test('validator is working', () => {
    req = { query: {name: 'test'}};
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

});


