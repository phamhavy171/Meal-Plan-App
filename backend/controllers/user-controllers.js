const User = require('../models/user');

module.exports.profile = (req, res) => {
  res.render('/profile');
};

module.exports.sendProfileData = (req, res) => {
  let newUser = new User();
  newUser.name = req.body.name;
  newUser.age = req.body.age;
  newUser.weight = req.body.weight;

  newUser
    .save()
    .then(data => {
      console.log(`User info has been added to the database: ${data}`);
    })
    .catch(err => {
      console.log(
        `An error has occurred while trying to save new data to the database: ${err}`
      );
    });
  res.redirect('/profile');

  // User.find({}, (err, res) => {
  //   if (err) {
  //     console.log('An error while fetching data from the database.');
  //   }
  //   res.render('/profile', {
  //     name: req.user.name,
  //     age: req.user.age,
  //     weight: req.user.weight
  //   })
  // })
};
