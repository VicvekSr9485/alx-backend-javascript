const { request } = require('express');
const express = require('express');

port = 7865
const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome to the payment system')
});

app.get('/cart/:id([0-9]+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
  
app.post('/login', (req, res) => {
    res.send(`Welcome ${req.body.userName}`);
  });

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`)
})

module.exports = app;
