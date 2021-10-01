const app = require('express').Router();
const tripModel = require('../model/tripDetails.model');

app.get('/', async (req, res) => {
  let data = await tripModel.find();

  res.render('home', { data });
});

module.exports = app;
