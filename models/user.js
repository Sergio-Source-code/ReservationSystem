// File Description: This is the user schema.

import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;