let app = require('express').Router();
const tripModel = require('../model/tripDetails.model');

app.get('/dashboard-editTrips', async (req, res) => {
  if (req.session.myID) {
    let data = await tripModel.find();
    res.render('editTrips', { data });
  } else {
    res.redirect('/signin');
  }
});

app.get('/edit-trip-details/:id', async (req, res) => {
  let details = await tripModel.find({ _id: req.params.id });

  res.render('editTripDetails', { details });
});

app.post('/submitEditTripDetails', async (req, res) => {
  const {
    _id,
    tripTitle,
    tripType,
    CoverPhoto,
    Description,
    tripPrice,
    Inclusions,
    tripDuration,
    departureDetails,
    availableLanguages,
    Exclusions,
  } = req.body;

  await tripModel.findByIdAndUpdate(
    { _id },
    {
      Title: tripTitle,
      Type: tripType,
      CoverPhoto: req.files.coverPhoto[0].path, // ==> this is cover photo
      Description: Description,
      Price: tripPrice,
      TripPhotos: req.files.tripPhotos, // ==> this is Trips photo ( array of objects )
      Inclusions: Inclusions,
      Duration: tripDuration,
      DepartureDetails: departureDetails,
      AvailableLanguages: availableLanguages,
      Exclusions,
    }
  );

  res.redirect('/dashboard-editTrips');
});

app.get('/deleteTrip/:id', async (req, res) => {
  await tripModel.findByIdAndDelete({ _id: req.params.id });
  res.redirect('/dashboard-editTrips');
});

app.get('/Logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/signin');
  });
});

module.exports = app;
