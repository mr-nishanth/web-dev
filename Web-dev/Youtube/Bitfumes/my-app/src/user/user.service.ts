import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/index.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
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
