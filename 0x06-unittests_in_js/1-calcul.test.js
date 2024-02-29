/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('test for SUM', () => {
    it('test with two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 3.0), 5);
    });

    it('test with two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -3.0), -5);
    });

    it('test with a as a negative number', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 3.0), 1);
    });

    it('test with b as a negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -3.0), -1);
    });

    it('test with two floating point numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 3.6), 6);
    });

    it('test with a as floating point number', () => {
      assert.strictEqual(calculateNumber('SUM', 2.9, 3.0), 6);
    });

    it('test with b as floating point number', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 3.6), 6);
    });
  });

  describe('test for SUBTRACT', () => {
    it('test with two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 3.0), 2);
    });

    it('test with two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.0, -3.0), -2);
    });

    it('test with a as a negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.0, 3.0), -8);
    });

    it('test with b as a negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.0, -3.0), 8);
    });

    it('test with two floating point numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.6), 2);
    });

    it('test with a as floating point number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.9, 3.0), 3);
    });

    it('test with b as floating point number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 3.6), 1);
    });
  });

  describe('test for DIVIDE', () => {
    it('test with b as zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 0.0), 'Error');
    });

    it('test with whole numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.0), 2);
    });

    it('test with a as floating point number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.3, 2.0), 2);
    });

    it('test with b as floating point number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.4), 2);
    });

    it('test with floating point number as result', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
});
