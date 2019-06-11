// vendors
const express = require('express');
const handler = require('express-async-handler');

// locals
const userController = require('./app/controllers/userController');


const routes = express.Router();

routes.post(
  '/user',
  handler(userController.store),
);

module.exports = routes;
