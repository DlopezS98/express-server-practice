import dotenv from 'dotenv';

export default class Environment {
  constructor() {
    dotenv.config();
  }

  get PORT() {
    return Number(process.env.PORT) || 3000;
  }
}
