import connectDB from '../../middleware/mongodb';
import User from '../../models/user';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      var user = new User(req.body);
      var userCreated = await user.save();
      return res.status(200).send(userCreated);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);