import UsersRepository from "../repositories/users.repository.js";

export default class UsersService {
  #usersRepository;
  constructor() {
    this.#usersRepository = new UsersRepository();
  }

  getList() {
    return this.#usersRepository.getList();
  }
}