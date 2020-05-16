const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const router = express.Router();
const User = require('../models/user');
const initializePassport = require('../passport-config');

// Getting all
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});

// // Creating one
// router.post('/', async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     age: req.body.age,
//     weight: req.body.weight,
//   });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// Updating one
router.patch('/profile/:id', getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }
  if (req.body.weight != null) {
    res.user.weight = req.body.weight;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'Deleted user' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

// //util function to check if a string is a valid email address
// const isEmail = email => {
//   if (typeof email !== 'string') {
//     return false;
//   }
//   const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

//   return emailRegex.test(email);
// };

// router.post('/register', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!isEmail(email)) {
//       throw new Error('Email must be a valid email address.');
//     }
//     if (typeof password !== 'string') {
//       throw new Error('Password must be a string.');
//     }

//     const user = new User({
//       email,
//       password,
//     });
//     const persistedUser = await user.save();

//     res.status(201).json({
//       title: 'User Registration Successful',
//       detail: 'Successfully registered new user',
//     });
//   } catch (err) {
//     res.status(400).json({
//       errors: [
//         {
//           title: 'Registration Error',
//           detail: 'Something went wrong during registration process.',
//           errorMessage: err.message,
//         },
//       ],
//     });
//   }
// });
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!isEmail(email)) {
//       return res.status(400).json({
//         errors: [
//           {
//             title: 'Bad Request',
//             detail: 'Email must be a valid email address',
//           },
//         ],
//       });
//     }
//     if (typeof password !== 'string') {
//       return res.status(400).json({
//         errors: [
//           {
//             title: 'Bad Request',
//             detail: 'Password must be a string',
//           },
//         ],
//       });
//     }
//     //queries database to find a user with the received email
//     const user = await User.findOne({ email });
//     if (!user) {
//       throw new Error();
//     }

//     //using bcrypt to compare passwords
//     const passwordValidated = await bcrypt.compare(password, user.password);
//     if (!passwordValidated) {
//       throw new Error();
//     }

//     res.json({
//       title: 'Login Successful',
//       detail: 'Successfully validated user credentials',
//     });
//     //added redirection to profile page tle
//     // res.redirect('/profile');
//   } catch (err) {
//     res.status(401).json({
//       errors: [
//         {
//           title: 'Invalid Credentials',
//           detail: 'Check email and password combination',
//           errorMessage: err.message,
//         },
//       ],
//     });
//   }
// });

// // redirect a non-loggedin-user
// // router.get('/profile', (req, res) => {
// //   redirect.nonLoggedinUser, userController.profile;
// // });
// router.get('/profile', (req, res) => {
//   console.log('nice, you got this far')
//   res.send('nice, you got this far');
// });

// router.patch('/profile/send/:email', async (req, res) => {
//   try {
//     const upDatedUser = await User.updateOne(
//       { email: req.params.email },
//       { $set: { name: req.body.name, age: req.body.age, weight: req.body.weight } }
//     );
//     console.log(upDatedUser);
//     res.json(upDatedUser);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

router.get('/login', checkNotAuthenticated, (req, res) => {
  res.send('Hello, I am the login page.');
});

router.post(
  '/login',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

router.get('/register', checkNotAuthenticated, (req, res) => {
  res.send('Hello, I am the register.');
});

router.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
      age: req.body.age,
      weight: req.body.weight,
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
    res.redirect('/login');
  } catch {
    res.status(400).json({ message: err.message });
    res.redirect('register');
  }
});


router.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

router.get('/profile', checkAuthenticated, (req, res) => {
  res.send('Hello, I am the profile.');
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/profile');
  }
  next();
}

initializePassport(
  passport,
  email => User.find(user => user.email === email),
  id => User.find(user => user.id === id)
);

module.exports = router;
