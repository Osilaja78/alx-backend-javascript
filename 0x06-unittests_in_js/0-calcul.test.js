/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('test with whole no.s', () => {
    assert.strictEqual(calculateNumber(2.0, 3.0), 5);
  });

  it('test with a as floating point', () => {
    assert.strictEqual(calculateNumber(2.6, 3.0), 6);
  });

  it('test with b as floating point', () => {
    assert.strictEqual(calculateNumber(2.0, 3.4), 5);
  });

  it('test with a and b as floating points', () => {
    assert.strictEqual(calculateNumber(2.1, 3.7), 6);
  });
});
