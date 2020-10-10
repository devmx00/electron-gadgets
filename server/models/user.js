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

userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.verifyPassword = function (password, callback) {
  const user = this;

  bcrypt.compare(password, user.password, function (err, isVerified) {
    if (err) return callback(err);
    callback(null, isVerified);
  });
};

module.exports = mongoose.model('User', userSchema);
