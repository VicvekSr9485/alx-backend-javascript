const express = require('express');

port = 7865
const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome to the payment system')
})

app.get('/cart/:id([0-9]+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
})

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`)
})

module.exports = app;
