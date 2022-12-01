// File Description: This is the reservation logic for a table.

const mongoose = require('mongoose');

// Require Mongoose:
var Schema = mongoose.Schema;

// Define Schema:
const TableSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  reservedDates: {
    type: [Number],
  },
}, {timestamps: true});

module.exports = mongoose.model('Table', TableSchema);