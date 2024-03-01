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

  it('GET /cart/:id returns 200 when id is a number', (done) => {
    request.get('http://localhost:7865/cart/78', (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 78');
      done();
    });
  });

  it('GET /cart/:id returns 404 when id is not a valid number', (done) => {
    request.get('http://localhost:7865/cart/abc', (_err, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
