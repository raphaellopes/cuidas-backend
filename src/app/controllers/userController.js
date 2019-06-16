// vendors
const moment = require('moment');

// locals
const User = require('../models/user');
const Schedule = require('../models/schedule');
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
    const { email } = req.query;

    const user = await User.findOne({ email });

    if (!user) {
      return res.send();
    }

    const schedules = await Schedule.find({
      user: user._id,
      date: {
        $gte: moment().format(),
      },
    });

    return res.json({ user, schedules });
  }
}

module.exports = new UserController();
