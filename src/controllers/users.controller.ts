import { Request, Response } from 'express';

import IUsers from '../core/database/models/users.model';
import UsersService from '../core/services/users.services';

export default class UsersController {
  private readonly userService: UsersService;
  
  constructor() {
    this.userService = new UsersService();
    this.index = this.index.bind(this);
  }

  index(request: Request, response: Response): Response {
    const users: IUsers[] = this.userService.getList();
    return response.status(200).json(users);
  }
}
