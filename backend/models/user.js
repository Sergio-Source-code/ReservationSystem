// File Description: This is the user schema.

// Require Mongoose:
const mongoose = require('mongoose');

// Create Schema Instance:
var Schema = mongoose.Schema;

// Define Schema:
const UserSchema = new Schema({
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
}, {timestamps: true});

// Creating the Model:
module.exports = mongoose.model('User', UserSchema);