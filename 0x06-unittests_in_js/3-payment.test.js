const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with the correct arguments and log the total', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        const consoleLogSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        assert.ok(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));
        assert.ok(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
        calculateNumberSpy.restore();
        consoleLogSpy.restore();
    });
});
