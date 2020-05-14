const User = require('../models/user');

module.exports.profile = (req, res) => {
  res.render('/profile', {
    name: req.user.name,
    age: req.user.age,
    weight: req.user.weight
  });
};

// tle added this