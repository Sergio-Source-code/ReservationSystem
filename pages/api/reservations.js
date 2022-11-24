import connectDB from '../../middleware/mongodb';
import Reservation from '../../models/reservation';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, numberOfGuests } = req.body;
    if (true || firstName) {
      try {
        var reservation = new Reservation({
          firstName,
          lastName,
          email,
          phoneNumber,
          numberOfGuests,
        });
        var reservationCreated = await reservation.save();
        return res.status(200).send(reservationCreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);