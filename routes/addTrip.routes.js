const app = require('express').Router();
const tripModel = require('../model/tripDetails.model');

app.get('/addTrip', (req, res) => {
  if (req.session.myID) {
    res.render('addTrip');
  } else {
    res.redirect('/signin');
  }
});

app.post('/handleAdd', async (req, res) => {
  let {
    tripTitle,
    tripType,
    Description,
    tripPrice,
    Inclusions,
    tripDuration,
    departureDetails,
    Exclusions,
    
  } = req.body;

  if (req.files == undefined) {
    // error messsage
    console.log('feh 8lt fl file');

    res.redirect('/addTrip');
  } else {
    await tripModel.insertMany({
      Title: tripTitle,
      Type: tripType,
      CoverPhoto: req.files.coverPhoto[0].path, // ==> this is cover photo
      Description: Description,
      Price: tripPrice + '$',
      TripPhotos: req.files.tripPhotos, // ==> this is Trips photo ( array of objects )
      Inclusions: Inclusions,
      Duration: tripDuration,
      DepartureDetails: departureDetails,
      Exclusions:Exclusions
    });
    res.redirect('/addTrip');
  }
});

module.exports = app;
