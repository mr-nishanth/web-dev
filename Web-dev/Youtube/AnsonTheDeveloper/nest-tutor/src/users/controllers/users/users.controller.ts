import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { User } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: UsersService,
  ) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Get(':username')
  getByUsername(@Param('username') username: string): User {
    const user = this.usersService.getUserByUsername(username);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
