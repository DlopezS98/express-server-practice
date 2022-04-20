export default class UsersRepository {
  #users = [{
    id: '1200012',
    firstname: 'Danny',
    lastname: 'Lopez',
    username: 'DlopezS98',
    email: '01dlopezs98@gmail.com',
    roles: ['Admin'],
    password: 'Gen3ricP@ssword',
    created_at: new Date('2022-04-16T04:06:53.240Z'),
  }];

  getList() {
    return this.#users;
  }

  create(user) {
    this.#users.push(user);
    return user;
  }
}