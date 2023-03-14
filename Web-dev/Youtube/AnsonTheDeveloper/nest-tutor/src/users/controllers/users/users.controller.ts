import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser, User } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: UsersService,
  ) {}

  // Method 1
  // @Get()
  // getUsers(): User[] {
  //   return this.usersService.getUsers();
  // }

  // Method 3
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  // Method 2
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':username')
  getByUsername(@Param('username') username: string): User {
    const user = this.usersService.getUserByUsername(username);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return new SerializedUser(user);
  }
}
