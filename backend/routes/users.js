// Below are all the routes involving user logitistics:

// Require Express:
const express = require('express');

// Import the Controllers:
const { createUser, getUser } = require('../controllers/UserController.js');

// Models to Import:
const User = require('../models/user.js');

// Create an Instance of the Router:
const userRouter = express.Router();

// Register/Post a User:
userRouter.post('/', createUser);

// Get all users:

// Get a specific user:
userRouter.get('/', getUser);

// Export Users
module.exports = userRouter;