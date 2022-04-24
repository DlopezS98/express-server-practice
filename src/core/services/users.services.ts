import IUsers from "../database/models/users.model";
import UsersRepository from "../repositories/users.repository";
import { UserRequestDto, UserResponseDto as UserRespDto } from '../../shared/dtos/users.dto';

export default class UsersService {
  private readonly usersRepository: UsersRepository;
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  getList(): Array<UserRespDto> {
    const users: IUsers[] = this.usersRepository.getList();
    return users.map(user => this.mapUserDto(user));
  }

  create(userReqDto: UserRequestDto): UserRespDto {
    const userModel: IUsers = this.usersRepository.create(this.mapUserModel(userReqDto));
    return this.mapUserDto(userModel);
  }

  // Helpers...
  mapUserDto(userModel: IUsers): UserRespDto {
    const { id, firstname, lastname, email, username, roles, created_at, updated_at } = userModel;
    return {
      id,
      fullname: `${firstname} ${lastname}`,
      email,
      username,
      roles,
      createdAt: created_at,
      updatedAt: updated_at
    };
  }

  mapUserModel(userReqDto: UserRequestDto): IUsers {
    const { firstname, lastname, username, email, password, roles } = userReqDto;
    return {
      id: this.getId(),
      email,
      firstname,
      lastname,
      username,
      password,
      roles,
      created_at: new Date()
    }
  }

  private getId(): string {
    const id: number = Math.floor(Math.random() * 100);
    return id.toString();
  }
}