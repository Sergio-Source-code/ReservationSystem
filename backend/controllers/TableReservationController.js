// import connectDB from '../../middleware/mongodb';
const Reservation = require('../models/reservation.js');
const Table = require('../models/table.js');
const mongoose = require('mongoose');

const createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);

    // table reservation logic
    const reservedTables = await Reservation.find({date: {
      $gt: reservation.date.getFullYear() + "-" + (reservation.date.getMonth() + 1) + "-" + reservation.date.getDate(),
      $lt: reservation.date.getFullYear() + "-" + (reservation.date.getMonth() + 1) + "-" + reservation.date.getDate() + "T23:59:59.999"
    }})
    const reservedTableIds = reservedTables.map(entry => {return entry.tableNumber;})
    const table = await Table.findOne({id: { $nin: reservedTableIds}});
    if (table) {
      reservation.tableNumber = table.id;
      const createdReservation = await reservation.save();
      console.log(createdReservation);
      return res.status(200).send(createdReservation);
    } else {
      throw Error("No available tables");
    }

    return res.status(500).send("Error reserving table");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

module.exports = {
    createReservation
}
