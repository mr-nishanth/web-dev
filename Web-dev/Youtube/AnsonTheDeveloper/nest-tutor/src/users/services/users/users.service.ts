import { Injectable } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id:1,
      username: 'john',
      password: 'changeme',
    },
    {
      id:2
      username: 'chris',
      password: 'secret',
    },
    {
      id:3,
      username: 'maria',
      password: 'guess',
    },
  ];

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
}
