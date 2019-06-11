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
}

module.exports = new UserController();
