const app = require('express').Router();
const tripModel = require('../model/tripDetails.model');
const bookingModel = require('../model/booking.modal');

app.get('/booking', async (req, res) => {
  let data = await tripModel.find({}).select('Title');
  res.render('booking', { data });
});

app.post('/handleBooking', async (req, res) => {
  let {
    name,
    email,
    phone,
    trip,
    checkIn,
    checkOut,
    rooms,
    adults,
    children,
    inquire,
  } = req.body;

  await bookingModel.insertMany({
    name,
    email,
    phone,
    trip,
    checkIn,
    checkOut,
    rooms,
    adults,
    children,
    inquire,
  });
  res.redirect('/');
});

module.exports = app;
