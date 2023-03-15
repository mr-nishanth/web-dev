import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/index.dto';

@Injectable()
export class UserService {
  getUsers() {
    return { name: 'Nishanth', email: 'nishanth@gmail.com' };
  }

  createUser(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  updateUser(updateUserDto: UpdateUserDto, param: { userId: number }) {
    return { updateUserDto, param: param?.userId };
  }

  getUser(param: { userId: number }) {
    return { param: param?.userId };
  }

  deleteUser(param: { userId: number }) {
    return { param: param?.userId };
  }
}
