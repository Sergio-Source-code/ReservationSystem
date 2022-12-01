// File Description: This is the logic for our table reservation:
const Reservation = require('../models/reservation.js');
const Table = require('../models/table.js');
const mongoose = require('mongoose');

// Create a Reservation:
const createReservation = async (req, res) => {

  try {
    // Create a table document with our model:
    const reservation = await Reservation.create(req.body);

    // Find the Beginning of Date and Find the Ending of Date:
    var beginningOfDay = new Date(reservation.date.getTime());
    beginningOfDay.setHours(0);
    beginningOfDay.setMinutes(0);
    beginningOfDay.setSeconds(0);
    var endOfDay = new Date(reservation.date.getTime());
    endOfDay.setHours(59);
    endOfDay.setMinutes(59);
    endOfDay.setSeconds(59);

    // Query all Reservation collection to find tables reserved in the date of reservation:
    const reservedTables = await Reservation.find({date: {$gt: beginningOfDay, $lt: endOfDay}});
    const reservedTableIds = reservedTables.map(entry => {return entry.tableNumber;})
    const isHighTrafficDay = reservedTableIds.size() > 3;
    // if (isHighTrafficDay && !userApproved) {
      //send response that will trigger front end popup about high traffic/surcharge
      //when prompt gets approved request comes back with additional field where user is approved.
    // }
    // Approved user will be allowed to continue reservation.

    // Find a table greater than the number of guests booked and NOT in reserved table IDs:
    const table = await Table.findOne({id: { $nin: reservedTableIds}, size: { $gt: reservation.numberOfGuests }});
    if (table) { // If there exists a table than createa a table document:
      reservation.tableNumber = table.id;
      const createdReservation = await reservation.save();
      console.log("Reserved at table " + table.id);
      return res.status(200).send(createdReservation);
    } else {
      console.log("Could not find tables, trying to merge...");
      const openTables = await Table.find({id: { $nin: reservedTableIds}});
      var openTableId = -1;
      var otherOpenTableId = -1;
      openTables.every(openTable => {
        const otherTableFound = openTables.find(otherTable => {
          return openTable.id != otherTable.id && openTable.size + otherTable.size >= reservation.numberOfGuests;
        })
        if (otherTableFound) {
          openTableId = openTable.id;
          otherOpenTableId = otherTableFound.id;
          return false;
        }
        return true;
      })
      if (openTableId != -1 && otherOpenTableId != -1) {
        const secondReservation = await Reservation.create(req.body);
        reservation.tableNumber = openTableId;
        secondReservation.tableNumber = otherOpenTableId;
        const createdReservation = await reservation.save();
        const secondCreatedReservation = await secondReservation.save();
        console.log("Reserved tables " + openTableId + " and " + otherOpenTableId);
        return res.status(200).send({firstReservation: createdReservation, secondReservation: secondCreatedReservation});
      } else {
        console.log("Could not merge tables either");
      }
    }
    //

    throw Error("No available tables.");
  } catch (error) { // Throw error message and send HTML error form.
    return res.status(500).send(error.message);
  }
};

// Get The Amount of Reservations for a Day:

module.exports = {
    createReservation
}
