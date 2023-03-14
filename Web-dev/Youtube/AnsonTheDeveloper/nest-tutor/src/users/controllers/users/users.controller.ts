import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  NotFoundException,
  Param,
  ParseIntPipe,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
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
  @Get('username/:username')
  getByUsername(@Param('username') username: string): User {
    const user = this.usersService.getUserByUsername(username);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return new SerializedUser(user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  getById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.usersService.getUserById(id);
    if (!user) {
      // throw new UserNotFoundException();

      throw new UserNotFoundException(
        'UserNotFoundException CustomErrorClass',
        400,
      );

      // throw new NotFoundException();
    }
    return new SerializedUser(user);
  }
}
