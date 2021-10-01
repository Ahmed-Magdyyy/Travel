const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);
