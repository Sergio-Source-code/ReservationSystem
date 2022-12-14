import connectDB from '../../middleware/mongodb';
import Reservation from '../../models/reservation';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      var reservation = new Reservation(req.body);

      // add logic to attempt reservation
      // throw error if not possible

      var reservationCreated = await reservation.save();
      return res.status(200).send(reservationCreated);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);