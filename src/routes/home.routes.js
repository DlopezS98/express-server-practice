const { Router } = require('express');
const HomeController = require('../controllers/home.controller');

class HomeRoutes {
  constructor() {
    this.router = Router();
    this.homeController = new HomeController();
  }

  initialize() {
    this.router.get("/", this.homeController.index);
    this.router.post("/create", this.homeController.create);
    return this.router;
  }
}

module.exports = HomeRoutes;