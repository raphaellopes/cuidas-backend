require('dotenv').config();

// vendors
const express = require('express');

// locals
const routes = require('./routes');

class App {
  constructor() {
    this.express = express();

    this.routes();

    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
