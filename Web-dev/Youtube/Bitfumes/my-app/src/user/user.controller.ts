import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,  
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {} //* Dependency Injection (UserController class depending on UserService)
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  store(@Body() body: any) {
    return this.userService.createUser(body);
  }

  @Patch('/:userId')
  update(@Body() body: any, @Param() param: { userId: number }) {
    return this.userService.updateUser(body, param);
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUser(param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.deleteUser(param);
  }
}
