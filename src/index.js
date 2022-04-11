const Application = require('./app');

class Startup {
  constructor() {
    this.app = new Application().initialize();
  }

  initialize() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`server listening on port ${this.app.get('port')}`);
    });
  }
}

new Startup().initialize();
