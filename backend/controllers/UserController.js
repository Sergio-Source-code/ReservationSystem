// File Description: This is the logic in each route for the users.

// Models to Import:
const User = require('../models/user.js');
const mongoose = require('mongoose');

// Get all users:

// Create a new user:
const createUser = async (req, res) => {
    // Extract them from request body:
    const {firstName, lastName, email, password} = req.body;

    // Try to Create a New User Document:
    try {
        const user = await User.create({firstName, lastName, email, password});
        res.status(200).json(user); // Send back user document.
    } catch (error) {
        res.status(400).json({error: error.message}); // Send back a error code and message.
    }
};

// Export Functions:
module.exports = {
    createUser
}