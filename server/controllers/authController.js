const jwt = require('jsonwebtoken');
const User = require('../models/user');

// auth controller
module.exports = (app) => {
  // route: /register
  // method: POST
  // description: user registration
  app.post('/register', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, function (err, user) {
      if (err) return res.status(400).send({ error: 'Registration failed.' });
      if (user) return res.status(422).send({ error: 'Email already in use.' });

      const newUser = new User({ email, password });
      newUser.save(function (err) {
        if (err) return res.status(400).send({ error: 'Registration failed.' });

        jwt.sign(newUser.id, 'secretKey', function (err, token) {
          if (err) return res.status(400).send('Registration failed.');
          return res.json({ token });
        });
      });
    });
  });

  // route: /login
  // method: POST
  // description: user login 
  app.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, function (err, user) {
      if (err) return res.status(400).send({ error: 'Login failed.' });
      if (!user) return res.status(422).send({ error: 'Invalid Credentials' });

      user.verifyPassword(password, function (err, isVerified) {
        if (err) return res.status(400).send('Login failed.');
        if (!isVerified) return res.status(422).send('Invalid Credentials.');

        jwt.sign(user.id, 'secretKey', function (err, token) {
          if (err) return res.status(400).send('Login failed.');
          return res.json({ token });
        });
      });
    });
  });
};
