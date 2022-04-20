import { Request, Response } from 'express';

export default class HomeController {
  index(request: Request, response: Response): Response {
    return response.status(200).json({
      name: "express api example",
      success: true
    });
  }
}