// File Description: This is the main file for our server stuff and backend. The route handling (GET, POST, DELETE) and all other updates are in the route folder.

// Require Express and Mongoose and Dot Environment:
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // PORT and server details are hidden in the .env file for privacy.

// Creating the express application:
app = express(); // Invoking express app.

// Require Cors:
let cors = require("cors");
app.use(cors());

// We import all route logistics for handling user registration and table registrations here:
const usersRoutes = require('./routes/users');
const reservationRoutes = require('./routes/tableReservations')

// Middlewares that aren't route handlers:
app.use(express.json()); // Middleware to see if request to route has a body, and if it does parse the body so that we can send body details to server.
app.use((req, res, next) => {
    // Log Path and Method:
    console.log(req.path, req.method);

    // Invoke to continue on and not be stuck in this middleware:
    next();
}); // Global Middleware to Log Request Path and Method:

// We use route logistics for handling user registration and table registrations here (we use the things we imported):
app.use('/api/users', usersRoutes);
app.use('/api/reservations', reservationRoutes);

// Make the express app listen to server:
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // After connected to DB, then listen to express application:
        app.listen(process.env.PORT, () => {
            console.log("Conneted to the database and listening on port 4000!");
        });
    })
    .catch((error) => {
        // Log any errors to console:
        console.log(error);
    });