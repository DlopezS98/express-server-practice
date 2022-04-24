import { Request, Response } from 'express';

import IUsers from '../core/database/models/users.model';
import UsersService from '../core/services/users.services';
import { UserResponseDto as UserRespDto, UserRequestDto as UserReqDto } from '../shared/dtos/users.dto';

export default class UsersController {
  private readonly userService: UsersService;
  
  constructor() {
    this.userService = new UsersService();
    this.index = this.index.bind(this);
  }

  index(request: Request, response: Response): Response {
    const users: UserRespDto[] = this.userService.getList();
    return response.status(200).json(users);
  }

  create = (request: Request, response: Response): Response => {
    const userReqDto: UserReqDto = request.body;
    const userRespDto: UserRespDto = this.userService.create(userReqDto);
    return response.status(201).json(userRespDto);
  }
}
