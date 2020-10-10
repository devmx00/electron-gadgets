const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    email: { type: String, lowercase: true, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err,salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err,hash) {
      if (err) return (err);

      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);
