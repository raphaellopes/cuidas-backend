// locals
const Schedule = require('../models/schedule');

class ScheduleController {
  async store(req, res) {
    const schedule = await Schedule.create(req.body);

    return res.json(schedule);
  }

  async list(req, res) {
    const schedules = await Schedule.find();

    return res.json(schedules);
  }
}

module.exports = new ScheduleController();
