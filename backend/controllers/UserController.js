// File Description: This is the logic in each route for the users.

// Models to Import:
const User = require('../models/user.js');
const mongoose = require('mongoose');

// Get all users:
const getAllUser = async (req, res) => {
    // Get all users:
    const users = await User.find();
    return users;
};

const getUser = async (req, res) => {
    try {
        User.find(res).then((user, error) => {
            if (user) {
                console.log("Found user " + user);
                return res.status(200).send(user);
            }
        })
        throw Error("User not found");
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

// Create a new user:
const createUser = async (req, res) => {
    // Unpack body of request:
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
    createUser,
    getUser
}