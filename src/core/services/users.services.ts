import IUsers from "../database/models/users.model";
import UsersRepository from "../repositories/users.repository";

export default class UsersService {
  private readonly usersRepository: UsersRepository;
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  getList(): Array<IUsers> {
    return this.usersRepository.getList();
  }
}