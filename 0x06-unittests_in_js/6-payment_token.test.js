const { doesNotMatch } = require('assert');
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token')

describe('getPaymentTokenFromAPI', () => {
    it('should return the correct data when the API call is successful', (done) => {
        getPaymentTokenFromAPI(true)
        .then((response) => {
            assert.deepStrictEqual(response, { data: 'Successful response from the API' });
            done();
        })
        .catch((error) => {
            done(error)
        })
    });
});
