const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { getSecret } = require('./secrets');
mongoose.Promise = global.Promise;
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");

//sets up the middleware for parsing the bodies and cookies off of the requests
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = { app };

mongoose.set('useCreateIndex', true);

mongoose
  .connect(getSecret('dbUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log('Connected to mongoDB');
    },
    err => console.log('Error connecting to mongoDB', err)
  );
//other imports
const usersRoute = require('./routes/users');

//other app.use statements
app.use('/api/users', usersRoute);

//added this so we can see something  tle
app.get('/', (req, res) => {
  res.send('Hello, I am the backend.');
});
