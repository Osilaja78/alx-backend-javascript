/* eslint-disable comma-dangle */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7865;

app.use(bodyParser.json());


app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (_, res) => {
  res.json(
    {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
  );
});

app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }
  console.log(req);
  res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
