// vendors
const express = require('express');

// locals
const scheduleController = require('./app/controllers/scheduleController');


const routes = express.Router();

routes.post('/schedule', scheduleController.store);

module.exports = routes;
