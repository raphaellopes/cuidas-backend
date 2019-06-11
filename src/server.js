require('dotenv').config();

// vendors
const express = require('express');
const mongoose = require('mongoose');

// locals
const routes = require('./routes');
const databaseConfig = require('./config/database');

class App {
  constructor() {
    this.express = express();

    this.database();
    this.routes();

    this.middlewares();
  }

  database() {
    this.mongoose = mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
    });
  }

  routes() {
    this.express.use(routes);
  }

  middlewares() {
    this.express.use(express.json());
  }
}

module.exports = new App().express;
