const app = require('./api');
const request = require('supertest');
const { expect } = require('chai');

describe('index page', () => {
    it('should return the correct status code', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).to.equal(200);
    });
    
    it('should return the correct output', async () => {
        const response = await request(app).get('/');
        expect(response.text).to.equal('Welcome to the payment system');
    });
});
