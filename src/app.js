const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const HomeRoutes = require('./routes/home.routes');
const Environment = require('./config/environment');

class Application {

  constructor() {
    this.app = express();
    this.env = new Environment();
  }

  initialize() {
    // config...
    this.app.set('port', this.env.PORT);
    // middlewares...
    this.app.use(morgan('dev'));
    this.app.use(cors());

    // routes...
    this.app.use('/api/v1/', new HomeRoutes().initialize());

    return this.app;
  }
}

module.exports = Application;
