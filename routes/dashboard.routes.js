const app = require('express').Router();
const bookingModel = require('../model/booking.modal');

app.get('/dashboard', async (req, res) => {


  if (req.session.myID) {
    let data = await bookingModel.find();
    res.render('dashboard', { data });
  } else {
    res.redirect('/signin');
  }
});

app.get('/delete/:id', async (req, res) => {
  await bookingModel.findByIdAndDelete({ _id: req.params.id });
  res.redirect('/dashboard');
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/signin');
  });
});

module.exports = app;
