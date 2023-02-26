const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
    it('should return the sum of two integers', function () {
        assert.strictEqual(calculateNumber(1, 2), 3);
        assert.strictEqual(calculateNumber(4, 3), 7);
        assert.strictEqual(calculateNumber(2, 4), 6);
    });

    it('should round the input arguments', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should round the first input argument', function() {
        assert.strictEqual(calculateNumber(1.4, 2), 3);
        assert.strictEqual(calculateNumber(2.5, 3), 6);
        assert.strictEqual(calculateNumber(1.6, 1), 3);
      });

    it('should round the second input argument', function() {
        assert.strictEqual(calculateNumber(1, 2.4), 3);
        assert.strictEqual(calculateNumber(4, 3.8), 8);
        assert.strictEqual(calculateNumber(0, 1.5), 2);
      });
});
