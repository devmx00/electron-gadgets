const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = (app) => {
  app.post('/api/payment', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'aud',
    });

    res.json({ client_secret: paymentIntent.client_secret });
  });
};
