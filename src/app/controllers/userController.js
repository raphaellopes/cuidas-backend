// locals
const User = require('../models/user');

class UserController {
  async store(req, res) {
    console.log(req.body);
    const schedule = await User.create(req.body);

    return res.json(schedule);
  }
}

module.exports = new UserController();
