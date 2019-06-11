// locals
const User = require('../models/user');
const { errorMessage } = require('../utils');

class UserController {
  async store(req, res) {
    const { email } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json(errorMessage('User already exists'));
    }

    const schedule = await User.create(req.body);

    return res.json(schedule);
  }

  async exists(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json(errorMessage('User not exists'));
    }

    return res.json(user);
  }
}

module.exports = new UserController();
