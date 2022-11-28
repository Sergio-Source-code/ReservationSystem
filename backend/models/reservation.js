// File Description: This is the reservation schema:

// Require Mongoose:
const mongoose = require('mongoose');

// Create Schema Instance:
var Schema = mongoose.Schema;

// Define Schema:
const ReservationSchema = new Schema({
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
  numberOfGuests: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {timestamps: true});

// Creating the Model:
module.exports = mongoose.model('Reservation', ReservationSchema);