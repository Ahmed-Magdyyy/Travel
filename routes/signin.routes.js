const app = require('express').Router();
const adminModal = require('../model/adminUser.modal');
const bcrypt = require('bcrypt');

app.get('/signin', (req, res) => {
  res.render('signin');
});

app.post('/handleSignin', async (req, res) => {
  let { email, password } = req.body;

  let data = await adminModal.findOne({ email: email });

  if (data != null) {
    const match = await bcrypt.compare(password, data.password);

    if (match) {
      var hour = 3600000;
      req.session.cookie.expires = new Date(Date.now() + hour);
      req.session.cookie.maxAge = hour;

      req.session.myID = data._id;
      req.session.myName = data.firstName;

      res.redirect('/dashboard');
    } else {
      console.log('password is incorrect');
      res.redirect('/signin');
    }
  } else {
    res.redirect('/signin');
  }
});

module.exports = app;
