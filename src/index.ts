import { Express } from 'express';

import Application from './app';

class Startup {
  private readonly app: Express;
  
  constructor() {
    this.app = new Application().initialize();
  }

  initialize() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`server listening on port ${this.app.get('port')}`);
      console.log('environment:', process.env.NODE_ENV);
    });
  }
}

new Startup().initialize();
