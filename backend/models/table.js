const mongoose = require('mongoose');

var Schema = mongoose.Schema;

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