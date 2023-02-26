const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('should round the input values and return the sum', () => {
      expect(calculateNumber('SUM', 1.5, 2.4)).to.equal(4);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('should round the input values and return the difference', () => {
      expect(calculateNumber('SUBTRACT', 5.6, 2.8)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 3.1, 1.5)).to.equal(1);
    });
  });

  describe('when type is DIVIDE', () => {
    it('should round the input values and return the quotient', () => {
      expect(calculateNumber('DIVIDE', 10, 3)).to.equal(3.3333333333333335);
      expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
    });

    it('should return "Error" when b is rounded to 0', () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });
  });
});
