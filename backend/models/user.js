const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  avatar: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
