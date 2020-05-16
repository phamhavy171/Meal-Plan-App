const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const bcrypt = require('bcrypt');

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    await User.findOne({ email: email }, (err, data) => {
      if (err) {
        return done(err);
      }

      if (!data) {
        return done(null, false, { message: 'Incorrect username. ' });
      }

      bcrypt.compare(password, data.password);

      if (data.password !== password) {
        return done(null, false, { message: 'Incorrect password. ' });
      }

      return done(null, data);
    });
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, data) => {
      if (err) {
        done(err);
      }
      if (data) {
        done(null, data);
      }
    });
  });
}

// function initialize(passport, getUserByEmail, getUserById) {
//   const authenticateUser = async (email, password, done) => {
//     const user = getUserByEmail(email);
//     if (user == null) {
//       return done(null, false, { message: 'No user with that email' });
//     }

//     try {
//       if (await bcrypt.compare(password, user.password)) {
//         return done(null, user);
//       } else {
//         return done(null, false, { message: 'Password incorrect' });
//       }
//     } catch (e) {
//       return done(e);
//     }
//   };

//   passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

//   passport.serializeUser((user, done) => done(null, user.id));
//   passport.deserializeUser((id, done) => {
//     return done(null, getUserById(id))
//   });
// }
module.exports = initialize;
