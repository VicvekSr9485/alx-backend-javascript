const app = require('./api');
const request = require('supertest');
const { expect } = require('chai');

describe('test GET /', () => {
    it('GET / should return 200 status code', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
    
    it('GET / should return Welcome to the payment system', (done) => {
        request(app)
            .get('/')
            .expect('Welcome to the payment system')
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
