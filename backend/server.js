if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const config = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
// const { getSecret } = require('./secrets');
// mongoose.Promise = global.Promise;

//PASSPORT INITIALIZATION
const initializePassport = require('./passport-config');

initializePassport(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
app.use(cors());

app.use(express.json());

mongoose
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log('Database is connected');
    },
    err => {
      console.log('Cannot connect to the database' + err);
    }
  );

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

// //sets up the middleware for parsing the bodies and cookies off of the requests
// app.use(bodyParser.json());
// app.use(cookieParser());

// module.exports = { app };

// mongoose.set('useCreateIndex', true);

// mongoose
//   .connect(getSecret('dbUri'), {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(
//     () => {
//       console.log('Connected to mongoDB');
//     },
//     err => console.log('Error connecting to mongoDB', err)
//   );
// //other imports
// const usersRoute = require('./routes/users');

// //other app.use statements
// app.use('/api/users', usersRoute);

//LOGIN, REGISTRATION AND AUTH UNDERNEATH !!!!!!!!!

app.get('/', (req, res) => {
    res.send('Hello, I am the backend.');
  });

// app.get('/login', checkNotAuthenticated, (req, res) => {
//   res.send('Hello, I am the login page.');
// });

// app.post(
//   'users/login',
//   checkNotAuthenticated,
//   passport.authenticate('local', {
//     successRedirect: '/profile',
//     failureRedirect: '/login',
//     failureFlash: true,
//   })
// );

// app.get('/register', checkNotAuthenticated, (req, res) => {
//   res.send('Hello, I am the register page.');
// });

// app.post('/register', checkNotAuthenticated, async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     users.push({
//       email: req.body.email,
//       password: hashedPassword,
//     });
//     res.redirect('/login');
//   } catch {
//     res.redirect('register');
//   }
// });

// app.delete('/logout', (req, res) => {
//   req.logOut();
//   res.redirect('/login');
// });

// app.get('/profile', checkAuthenticated, (req, res) => {
//   res.send('Hello, I am the profile page.');
// });

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');
// }

// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect('/profile');
//   }
//   next();
// }

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
