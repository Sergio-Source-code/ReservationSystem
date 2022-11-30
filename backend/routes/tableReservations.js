// File Description: Below are all the routes involving table registration logistics.

// Require Express:
const express = require('express');

// Import the Controllers:
const { createReservation } = require('../controllers/TableReservationController.js');

// Models to Import:
const TableReservation = require('../models/reservation.js');

// Create an Instance of the Router:
const tableReservationRouter = express.Router();

// Register/Post a Reservation:
tableReservationRouter.post('/', createReservation);

// Get all Registrations:

// Get a specific Registration:

// Export Users
module.exports = tableReservationRouter;