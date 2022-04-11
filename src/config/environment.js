const dotenv = require('dotenv');

class Environment {
  constructor() {
    dotenv.config();
  }

  get PORT() {
    return Number(process.env.PORT) || 3000;
  }
}

module.exports = Environment;
