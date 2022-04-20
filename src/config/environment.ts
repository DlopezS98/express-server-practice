import dotenv from 'dotenv';
import path from 'path';

export default class Environment {
  constructor() {
    const env: string = String(process.env.NODE_ENV || 'development').trim();
    const path_url: string = path.resolve(__dirname, `${env}.env`);

    dotenv.config({
      path: path_url
    });
  }

  get PORT(): Number {
    return Number(process.env.PORT) || 5000;
  }
}
