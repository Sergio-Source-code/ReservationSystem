// File Description: This is the logic in each table reservation for each user.

// Models to Import:
const Reservation = require('../models/reservation.js');
const mongoose = require('mongoose');

// Create a Reservation:
const createReservation = async (req, res) => {
  // Unpack contents from request body:

  // Send a failure status:
  res.status(500).send("FAILED");

  try {
    var reservation = new Reservation(req.body);
    var reservationCreated = await reservation.save();
    console.log("Created reservation");
    return res.status(200).send(reservationCreated);
  } catch (error) {
    // Log Errors and Send 
    return res.status(500).send(error.message);
  }
};

// Get The Amount of Reservations for a Day:


module.exports = {
    createReservation
}