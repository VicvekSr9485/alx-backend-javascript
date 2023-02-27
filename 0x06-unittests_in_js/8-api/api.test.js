const app = require('./api');
const request = require('supertest');
const { expect } = require('chai');

describe('test GET /', () => {
    it('GET / should return 200 status code', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).to.equal(200);
    });
    
    it('GET / should return Welcome to the payment system', async () => {
        const response = await request(app).get('/');
        expect(response.text).to.equal('Welcome to the payment system');
    });
});
