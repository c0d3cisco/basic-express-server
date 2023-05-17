'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const appWithSupertest = supertest(app);

describe('Full server test', () => {

  test('root path', async () => {
    const response = await appWithSupertest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toEqual('Server is operational');
  });

  test('wrong route', async () => {
    const response = await appWithSupertest.get('/personTest');
    expect(response.status).toBe(404);
    expect(response.body.message).toEqual('Route not found');

  });

  test('wrong key to correct route', async () => {
    const response = await appWithSupertest.get('/person?test=test');
    expect(response.status).toBe(500);
    expect(response.body.message).toEqual(`Server Error: Query key must be 'name'`);
  });

  test('wrong value to correct key', async () => {
    const response = await appWithSupertest.get('/person?name=');
    expect(response.status).toBe(500);
    expect(response.body.message).toEqual('Server Error: Value must be provided');
  });

  test('wrong method', async () => {
    const response = await appWithSupertest.post('/person?name=');
    expect(response.status).toBe(404);
    expect(response.body.message).toEqual('Method not found');
  });

  test('server response', async () => {
    const response = await appWithSupertest.get('/person?name=test');
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual();
  });

  //   test('handles success route', async () => {
  //     const response = await mockRequest.get('/success');

  //     expect(response.status).toEqual(200);
  //     expect(response.text).toEqual('Success!!');

  //   });

  //   test('handles bad requests', async () => {
  //     const response = await mockRequest.get('/bad');
  //     console.log(response.body);
  //     expect(response.status).toEqual(500);
  //     expect(response.body.route).toEqual('/bad');
  //     expect(response.body.message).toEqual('Server Error: We have an error!');
  //   });

  //   test('handles not found', async () => {
  //     const response = await mockRequest.get('/foo');
  //     expect(response.status).toEqual(404);

  //   });

  //   // TDD goal:  to validate that the word banana is being sent as a path parameter
  //   test('validate banana parameter', async () => {
  //     let response = await mockRequest.get('/helloPath/something');
  //     expect(response.status).toEqual(500);

  //     response = await mockRequest.get('/helloPath/banana');
  //     expect(response.status).toEqual(200);
  //   });

});
