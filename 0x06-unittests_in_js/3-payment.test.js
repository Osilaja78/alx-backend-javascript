/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('test sendPaymentRequestToApi uses the calculateNumber from Utils', () => {
    const callback = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);

    expect(callback.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(callback.calculateNumber.callCount).to.be.equal(1);

    callback.calculateNumber.restore();
  });
});
