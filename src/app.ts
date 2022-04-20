import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import HomeRoutes from './routes/home.routes';
import UsersRoutes from './routes/users.routes';
import Environment from './config/environment';

export default class Application {

  private readonly app: Express;
  public env: Environment;

  constructor() {
    this.app = express();
    this.env = new Environment();
  }

  initialize(): Express {
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
