import { IRouter, Router } from 'express';

import HomeController from '../controllers/home.controller';

export default class HomeRoutes {
  private router: IRouter;
  private readonly homeController: HomeController;

  constructor() {
    this.router = Router();
    this.homeController = new HomeController();
  }

  initialize() {
    this.router.get('/', this.homeController.index);
    return this.router;
  }
}