const app = require('express').Router();
const tripModel = require('../model/tripDetails.model');

app.get('/trips', async (req, res) => {
  let oneDayTour = await tripModel.find({ Type: 'One day tour' });
  let fullPackageTour = await tripModel.find({ Type: 'Full Package' });
  let topTour = await tripModel.find({ Type: 'Top tour' });

  res.render('trips', { oneDayTour, fullPackageTour, topTour });
});

module.exports = app;
