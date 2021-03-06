// vendors
const express = require('express');
const handler = require('express-async-handler');

// locals
const userController = require('./app/controllers/userController');
const scheduleController = require('./app/controllers/scheduleController');


const routes = express.Router();

// user
routes.get('/user/exists', handler(userController.exists));
routes.post('/user', handler(userController.store));

// schedule
routes.get('/schedule', handler(scheduleController.list));
routes.get('/schedule/available', handler(scheduleController.available));
routes.post('/schedule', handler(scheduleController.store));
routes.delete('/schedule/:id', handler(scheduleController.delete));

module.exports = routes;
