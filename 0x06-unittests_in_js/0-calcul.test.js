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
});
