// coffee: price_1NDUqHALqsWPo0rqaedrsnqV
// FIRESTORE_API_KEY=sk_test_51NDHdfALqsWPo0rqTYarcWhGze7u5MV3CUfzuJ5XqHacDEVV5FKuMrSjPLv9XfFzroB1DTC6H7mfxVmAKBgA0Dz8006c2RGJAB
// sunglasses: price_1NDUryALqsWPo0rqBrjlBt4k
// camera: price_1NDUsuALqsWPo0rqXmagBcXk

// This is your test secret API key.
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51NDHdfALqsWPo0rqTYarcWhGze7u5MV3CUfzuJ5XqHacDEVV5FKuMrSjPLv9XfFzroB1DTC6H7mfxVmAKBgA0Dz8006c2RGJAB');

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json())



const YOUR_DOMAIN = 'http://localhost:4000';

app.post('/checkout', async (req, res) => {
  console.log(req.body)
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push(
      {
        price: item.id,
        quantity: item.quantity
      }
    )
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel"
  });


  res.send(JSON.stringify({
    url: session.url
  }));

});

app.listen(4000, () => console.log('Running on port 4000'));