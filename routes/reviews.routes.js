let app = require('express').Router();
const reviewsModel = require('../model/reviews.modal');

app.get('/reviews', async (req, res) => {
  let reviews = await reviewsModel.find();

  res.render('reviews', { reviews });
});

module.exports = app;
