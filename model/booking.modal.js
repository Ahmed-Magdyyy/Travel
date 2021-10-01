const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  trip: String,
  checkIn: String,
  checkOut: String,
  rooms: String,
  adults: String,
  children: String,
  inquire: String,
});

module.exports = mongoose.model('booking', bookingSchema);
