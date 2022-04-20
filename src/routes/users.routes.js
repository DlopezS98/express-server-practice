import { Router } from 'express';

import UsersController from '../controllers/users.controller.js';

export default class UsersRoutes {
  constructor() {
    this.router = Router();
    this.usersController = new UsersController();
  }

  initialize() {
    this.router.get('/', this.usersController.index);
    return this.router;
  }
}