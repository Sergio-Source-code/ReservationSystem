// import connectDB from '../../middleware/mongodb';
const Reservation = require('../models/reservation.js');

const createReservation = async (req, res) => {
  res.status(500).send("FAILED");
  try {
    var reservation = new Reservation(req.body);
    var reservationCreated = await reservation.save();
    console.log("Created reservation");
    return res.status(200).send(reservationCreated);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
    createReservation
}
// export default createReservation;