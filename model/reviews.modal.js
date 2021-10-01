const mongoose = require('mongoose');

const reviewsSchema = mongoose.Schema({
  rating: String,
  reviewName: String,
  reviewDate: String,
  reviewText: String,
});

module.exports = mongoose.model('reviews', reviewsSchema);
