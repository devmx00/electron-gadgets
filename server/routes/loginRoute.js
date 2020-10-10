const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// method: POST
// route: /login
// description: user login
router.post('/', (req, res, next) => {
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

module.exports = router;
