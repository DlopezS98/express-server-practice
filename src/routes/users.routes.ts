import { Router, IRouter } from 'express';

import UsersController from '../controllers/users.controller';

export default class UsersRoutes {
  private router: IRouter;
  private readonly usersController: UsersController;

  constructor() {
    this.router = Router();
    this.usersController = new UsersController();
  }

  initialize() {
    this.router.get('/', this.usersController.index);
    this.router.post('/', this.usersController.create);
    return this.router;
  }
}