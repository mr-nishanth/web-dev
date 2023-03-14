import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass, plainToInstance } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { SerializedUser, User } from 'src/users/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'chris',
      password: 'secret',
    },
    {
      id: 3,
      username: 'maria',
      password: 'guess',
    },
  ];

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // Method 1
  // getUsers(): User[] {
  //   return this.users.map((user) => plainToInstance(SerializedUser, user));
  // }

  // Method 3
  getUsers(): User[] {
    return this.users.map((user) => new SerializedUser(user));
  }

  // Method 2
  getUserByUsername(username: string): User {
    return this.users.find((user) => user?.username === username);
  }

  getUserById(id: number): User {
    return this.users.find((user) => user?.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);

    // save the user
    return this.userRepository.save(newUser);
  }
}
