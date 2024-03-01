/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/no-hooks */
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message for total 100 and shipping 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleLogSpy.callCount).to.equal(1);
  });

  it('should log the correct message for total 10 and shipping 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleLogSpy.callCount).to.equal(1);
  });
});
