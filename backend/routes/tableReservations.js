// File Description: Below are all the routes involving table registration logistics.

// Require Express:
const express = require('express');

// Import the Controllers:
const { createReservation, getHighTraffic } = require('../controllers/TableReservationController.js');

// Models to Import:
const TableReservation = require('../models/reservation.js');

// Create an Instance of the Router:
const tableReservationRouter = express.Router();

// Register/Post a Reservation:
tableReservationRouter.post('/', createReservation);

// get if high traffic day
tableReservationRouter.post('/traffic', getHighTraffic)

// Get all Registrations:

// Get a specific Registration:

// Export Users
module.exports = tableReservationRouter;