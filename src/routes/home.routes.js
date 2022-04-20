import { Router } from 'express';

import HomeController from '../controllers/home.controller.js';

export default class HomeRoutes {
  constructor() {
    this.router = Router();
    this.homeController = new HomeController();
  }

  initialize() {
    this.router.get('/', this.homeController.index);
    return this.router;
  }
}