// locals
const Schedule = require('../models/schedule');

class ScheduleController {
  async store(req, res) {
    const schedule = await Schedule.create(req.body);

    return res.json(schedule);
  }
}

module.exports = new ScheduleController();
