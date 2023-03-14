import { Injectable } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'john',
      password: 'changeme',
    },
    {
      username: 'chris',
      password: 'secret',
    },
    {
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
