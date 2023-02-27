const sendPaymentRequestToAPI = require('./5-payment');
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequest', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy= sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.restore();
    });

    it('should log the correct message and be called once when calling sendPaymentRequestToAPI with 100 and 20', () => {
        sendPaymentRequestToAPI(100, 20);

        assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
    });

    it('should log the correct message and be called once when calling sendPaymentRequestToAPI with 10 and 10', () => {
        sendPaymentRequestToAPI(10, 10);

        assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
    });
});
