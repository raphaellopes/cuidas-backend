// vendors
const moment = require('moment');

// locals
const Schedule = require('../models/schedule');

const HOURS = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
];

class ScheduleController {
  async store(req, res) {
    const schedule = await Schedule.create(req.body);

    return res.json(schedule);
  }

  async list(req, res) {
    const schedules = await Schedule
      .find()
      .populate('user');

    return res.json(schedules);
  }

  async delete(req, res) {
    await Schedule.findByIdAndDelete(req.params.id);

    return res.send();
  }

  async available(req, res) {
    const { query } = req;
    const date = moment(query.date);

    const appointments = await Schedule
      .where('date')
      .gte(date.startOf('day').format())
      .lte(date.endOf('day').format());


    const schedule = HOURS.filter((time) => {
      const [hour, min] = time.split(':');
      const value = date.hour(hour).minute(min).second(0);

      return value.isAfter(moment()) && time;
    });

    const booked = appointments
      .map(a => moment(a.date).format('HH:mm'))
      .reduce((uniq, item) => (
        uniq.includes(item) ? uniq : [...uniq, item]), []);

    const available = schedule.filter(item => !booked.includes(item));

    return res.json(available);
  }
}

module.exports = new ScheduleController();
