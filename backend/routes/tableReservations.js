// File Description: Below are all the routes involving table registration logistics.

// Require Express:
const express = require('express');

// Import the Controllers:
const {} = require('../controllers/UserController.js');

// Models to Import:
const TableReservation = require('../models/reservation.js');

// Create an Instance of the Router:
const tableReservationRouter = express.Router();

// Export Users
module.exports = tableReservationRouter;