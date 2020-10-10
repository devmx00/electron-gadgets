const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// method: POST
// route: /register
// description: user registration
router.post('/', (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }, function(err, user) {
    if (err) return res.status(400).send({ error: 'Registration failed.'});  
    if (user) return res.status(422).send({ error: 'Email already in use.'});  

    const newUser = new User({ email, password });
    newUser.save(function (err) {
      if (err) return res.status(400).send({ error: 'Registration failed.'});  

      jwt.sign(newUser.id,'secretKey', function (err,token) {
        if (err) return next(err);
        return res.json({ token });
      })

    });
  });
});

module.exports = router;