'use strict';

const logger = require('.'); // unit test

describe('Logger middleware', () => {
  let consoleSpy;

  //? Is this test considered hardcoded?
  let req = {
    path: '/person',
    method: 'GET',
  };
  let res = {};
  let next = jest.fn();

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  test('logger is working as expected', () => {
    logger(req, res, next);

    expect(consoleSpy).toHaveBeenCalledWith('Method: GET' && 'Path: /person');
  });
});

