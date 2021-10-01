let app = require('express').Router();
const reviewsModel = require('../model/reviews.modal');
const tripModel = require('../model/tripDetails.model');

app.get('/trip-details/:id', async (req, res) => {
  let details = await tripModel.find({ _id: req.params.id });
  let reviews = await reviewsModel.find();

  res.render('tripDetails', { details, reviews });
});

app.post('/reviewHandler', async (req, res) => {
  let { rating, reviewName, reviewDate, reviewText } = req.body;

  await reviewsModel.insertMany({
    rating,
    reviewName,
    reviewDate: reviewDate.split('-').reverse().join('/'),
    reviewText,
  });

  res.redirect('/reviews');
});

module.exports = app;
