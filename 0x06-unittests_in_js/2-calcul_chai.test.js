/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('test with two positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 3.0)).to.equal(5);
    });

    it('test with two negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, -3.0)).to.equal(-5);
    });

    it('test with a as negative number', () => {
      expect(calculateNumber('SUM', -2.0, 3.0)).to.equal(1);
    });

    it('test with b as negative number', () => {
      expect(calculateNumber('SUM', 2.0, -3.0)).to.equal(-1);
    });

    it('test with two floating point numbers', () => {
      expect(calculateNumber('SUM', 2.3, 3.6)).to.equal(6);
    });

    it('test with a as floating point number', () => {
      expect(calculateNumber('SUM', 2.9, 3.0)).to.equal(6);
    });

    it('test with b as floating point number', () => {
      expect(calculateNumber('SUM', 2.0, 3.6)).to.equal(6);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('test with two positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.0, 3.0)).to.equal(2);
    });

    it('test with two negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -5.0, -3.0)).to.equal(-2);
    });

    it('test with a as a negative number', () => {
      expect(calculateNumber('SUBTRACT', -5.0, 3.0)).to.equal(-8);
    });

    it('test with b as a negative number', () => {
      expect(calculateNumber('SUBTRACT', 5.0, -3.0)).to.equal(8);
    });

    it('test with two floating point numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 3.6)).to.equal(2);
    });

    it('test with a as floating point number', () => {
      expect(calculateNumber('SUBTRACT', 5.9, 3.0)).to.equal(3);
    });

    it('test with b as floating point number', () => {
      expect(calculateNumber('SUBTRACT', 5.0, 3.6)).to.equal(1);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('test with b as zero', () => {
      expect(calculateNumber('DIVIDE', 2.0, 0.0)).to.equal('Error');
    });

    it('test with whole numbers', () => {
      expect(calculateNumber('DIVIDE', 4.0, 2.0)).to.equal(2);
    });

    it('test with a as floating point number', () => {
      expect(calculateNumber('DIVIDE', 4.3, 2.0)).to.equal(2);
    });

    it('test with b as floating point number', () => {
      expect(calculateNumber('DIVIDE', 4.0, 2.4)).to.equal(2);
    });

    it('test with floating point number as result', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
});
