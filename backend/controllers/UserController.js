// File Description: This is the logic in each route for the users.

// Models to Import:
const User = require('../models/user.js');
const mongoose = require('mongoose');

// Get all users:

// Create a new user:
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const createdUser = await user.save();
        console.log("Created user");
        return res.status(200).json(createdUser);
    } catch (error) {
        return res.status(400).json({error: error.message}); // Send back a error code and message.
    }
};

// Export Functions:
module.exports = {
    createUser
}