const { expect } = require("chai");
const request = require('request');

describe('test GET /', () => {
  it('should return correct message in response', (done) => {
    const options = {
      url: 'http://localhost:7865',
      method: 'GET',
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('test GET cart/:id', () => {
  it('should return status 200 and correct body', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/32',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 32');
      done()
    });
  })

  it('should return a 404 response if error', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/boy',
      method: 'GET',
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done()
    });
  });
});

describe('test GET /available_payments', () => {
  it('should return status 200 and correct body', (done) => {
    const options = {
      url: 'http://localhost:7865/available_payments',
      method: 'GET',
    };

    const res = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      }
    }

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.equal(JSON.stringify(res));
      done();
    });
  });
});
