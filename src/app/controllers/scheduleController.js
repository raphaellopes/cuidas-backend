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

  async delete(req, res) {
    await Schedule.findByIdAndDelete(req.params.id);

    return res.send();
  }
}

module.exports = new ScheduleController();
