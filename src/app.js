import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import HomeRoutes from './routes/home.routes.js';
import UsersRoutes from './routes/users.routes.js';
import Environment from './config/environment.js';

export default class Application {

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
    this.app.use('/api/v1/users/', new UsersRoutes().initialize());

    return this.app;
  }
}
