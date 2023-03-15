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

  updateUser(updateUserDto: UpdateUserDto, userId: number) {
    return { updateUserDto, userId };
  }

  getUser(userId: number) {
    return { userId };
  }

  deleteUser(userId: number) {
    return { userId };
  }
}
