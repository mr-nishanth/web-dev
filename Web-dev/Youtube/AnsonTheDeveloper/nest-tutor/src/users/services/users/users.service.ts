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

  getUsers(): User[] {
    return this.users.map((user) => plainToInstance(SerializedUser, user));
  }

  getUserByUsername(username: string): User {
    return this.users.find((user) => user?.username === username);
  }
}
