const mongoose = require('mongoose');

const TripDetailsSchema = mongoose.Schema({
  Title: String,
  Type: String,
  CoverPhoto: String,
  Description: String,
  Price: String,
  TripPhotos: Array,
  Inclusions: String,
  Duration: String,
  DepartureDetails: String,
  Exclusions: String,
  // CancellationPolicy: String,
});

module.exports = mongoose.model('TripDetail', TripDetailsSchema);
