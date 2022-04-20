import IUsers from "../database/models/users.model";

export default class UsersRepository {
  private users: Array<IUsers> = [{
    id: '1200012',
    firstname: 'Danny',
    lastname: 'Lopez',
    username: 'DlopezS98',
    email: '01dlopezs98@gmail.com',
    roles: ['Admin'],
    password: 'Gen3ricP@ssword',
    created_at: new Date('2022-04-16T04:06:53.240Z'),
  }];

  getList(): Array<IUsers> {
    return this.users;
  }

  create(user: IUsers): IUsers {
    this.users.push(user);
    return user;
  }
}