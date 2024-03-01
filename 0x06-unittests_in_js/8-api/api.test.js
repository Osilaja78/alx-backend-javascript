/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/lowercase-name */
const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  it('GET / returns correct response', (done) => {
    request.get('http://localhost:7865', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
