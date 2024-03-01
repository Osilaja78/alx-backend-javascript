/* eslint-disable comma-dangle */
/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/lowercase-name */
const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  it('Ensure / returns correct response', (done) => {
    request.get('http://localhost:7865', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('Ensure /cart/:id returns 200 when id is a number', (done) => {
    request.get('http://localhost:7865/cart/78', (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 78');
      done();
    });
  });

  it('Ensure /cart/:id returns 404 when id is not a valid number', (done) => {
    request.get('http://localhost:7865/cart/abc', (_err, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Ensure /available_payments returns valid response', (done) => {
    request.get('http://localhost:7865/available_payments', (_err, res, body) => {
      expect(JSON.parse(body)).to.be.deep.equal(
        {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        }
      );
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Ensure /login returns valid response', (done) => {
    request.post('http://localhost:7865/login', { json: { userName: 'Alamedo' } }, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Alamedo');
      done();
    });
  });
});
