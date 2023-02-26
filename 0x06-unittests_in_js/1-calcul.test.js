const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('when type is SUM', function() {
        it('should return the sum of two integers', function() {
            assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
            assert.strictEqual(calculateNumber('SUM', 4, 3), 7);
            assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
        });

        it('should round the input values', function() {
            assert.strictEqual(calculateNumber('SUM', 1.5, 2.6), 5);
            assert.strictEqual(calculateNumber('SUM', 4.2, 3.8), 8);
            assert.strictEqual(calculateNumber('SUM', 0.3, 0.6), 1);
          });
    });

    describe('when type is SUBTRACT', function() {
        it('should return the difference between two integers', function() {
          assert.strictEqual(calculateNumber('SUBTRACT', 5, 2), 3);
          assert.strictEqual(calculateNumber('SUBTRACT', 4, 5), -1);
          assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
        });
    
        it('should round the input values', function() {
          assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 1.5), 1);
          assert.strictEqual(calculateNumber('SUBTRACT', 4.2, 3.8), 0);
          assert.strictEqual(calculateNumber('SUBTRACT', 0.6, 0.3), 1);
        });
    });

    describe('when type is DIVIDE', function() {
        it('should return the quotient of two integers', function() {
          assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
          assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
        });
    
        it('should round the input values', function() {
          assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.5), 2);
          assert.strictEqual(calculateNumber('DIVIDE', 4.2, 3.8), 1);
          assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
        });
    
        it('should return "Error" if b is rounded to 0', function() {
          assert.strictEqual(calculateNumber('DIVIDE', 1, 0.01), 'Error');
          assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
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
