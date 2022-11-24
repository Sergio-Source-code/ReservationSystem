import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var reservation = new Schema({
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
});

mongoose.models = {};

var Reservation = mongoose.model('Reservation', reservation);

export default Reservation;