// vendors
const express = require('express');
const handler = require('express-async-handler');

// locals
const userController = require('./app/controllers/userController');
const scheduleController = require('./app/controllers/scheduleController');


const routes = express.Router();

// user
routes.post(
  '/user',
  handler(userController.store),
);

// schedule
routes.post(
  '/schedule',
  handler(scheduleController.store),
);

module.exports = routes;
