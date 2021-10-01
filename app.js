const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri: 'mongodb+srv://admin:07775666@magdy.pbupj.mongodb.net/ThothTravel',
  collection: 'mySessions',
});

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store,
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + Math.random() * 100 + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  if (
    file.mimetype == 'image/png' ||
    file.mimetype == 'image/jpg' ||
    file.mimetype == 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: false }));
const upload = multer({ dest: 'uploads', storage, fileFilter });

app.use(
  upload.fields([
    { name: 'coverPhoto', maxCount: 1 },
    { name: 'tripPhotos', maxCount: 5 },
  ])
);

mongoose.connect(
  'mongodb+srv://admin:07775666@magdy.pbupj.mongodb.net/ThothTravel',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(require('./routes/home.routes'));
app.use(require('./routes/dashboard.routes'));
app.use(require('./routes/addTrip.routes'));
app.use(require('./routes/trips.routes'));
app.use(require('./routes/booking.routes'));
app.use(require('./routes/editTrips.routes'));
app.use(require('./routes/tripDetails.routes'));
app.use(require('./routes/reviews.routes'));
app.use(require('./routes/signin.routes'));

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port port!`)
);
