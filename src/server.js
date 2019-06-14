require('dotenv').config();

// vendors
const express = require('express');
const mongoose = require('mongoose');
const Youch = require('youch');
const cors = require('cors');

// locals
const routes = require('./routes');
const databaseConfig = require('./config/database');

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.exception();
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
    this.express.use(cors());
    this.express.use(express.json());
  }

  exception() {
    this.express.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err);

        return res.json(await youch.toJSON());
      }

      return res.status(err.status || 500).json({
        error: 'Internal Server error',
      });
    });
  }
}

module.exports = new App().express;
