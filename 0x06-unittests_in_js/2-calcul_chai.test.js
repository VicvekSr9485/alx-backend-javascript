const assert = require('assert');
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('when type is SUM', function() {
        it('should return the sum of two integers', function() {
            expect(calculateNumber('SUM', 1, 2)).to.equal(3);
            expect(calculateNumber('SUM', 4, 3)).to.equal(7);
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        });

        it('should round the input values', function() {
            expect(calculateNumber('SUM', 1.5, 2.6)).to.equal(5);
            expect(calculateNumber('SUM', 4.2, 3.8)).to.equal(8);
            expect(calculateNumber('SUM', 0.3, 0.6)).to.equal(1);
          });
    });

    describe('when type is SUBTRACT', function() {
        it('should return the difference between two integers', function() {
          expect(calculateNumber('SUBTRACT', 5, 2)).to.equal(3);
          expect(calculateNumber('SUBTRACT', 4, 5)).to.equal(-1);
          expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
        });
    
        it('should round the input values', function() {
          expect(calculateNumber('SUBTRACT', 2.6, 1.5)).to.equal(1);
          expect(calculateNumber('SUBTRACT', 4.2, 3.8)).to.equal(0);
          expect(calculateNumber('SUBTRACT', 0.6, 0.3)).to.equal(1);
        });
    });

    describe('when type is DIVIDE', function() {
        it('should return the quotient of two integers', function() {
          expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
          expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
        });
    
        it('should round the input values', function() {
          expect(calculateNumber('DIVIDE', 3.7, 1.5)).to.equal(2);
          expect(calculateNumber('DIVIDE', 4.2, 3.8)).to.equal(1);
          expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
        });
    
        it('should return "Error" if b is rounded to 0', function() {
          expect(calculateNumber('DIVIDE', 1, 0.01)).to.equal('Error');
          expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
        });
    });

    describe('when type is invalid', function() {
        it('should throw an error', function() {
          assert.throws(() => calculateNumber('invalid', 1, 2), {
            name: 'Error',
            message: 'Invalid type: invalid'
          });
        });
    });
});
