import UsersService from '../core/services/users.services.js';

export default class UsersController {
  #userService;
  constructor() {
    this.#userService = new UsersService();
    this.index = this.index.bind(this);
  }

  index(request, response) {
    const users = this.#userService.getList();
    return response.status(200).json(users);
  }

  SayHelloWorld = () => {
    console.log(this);
  }
}
