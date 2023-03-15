import {
  Body,
  Controller, 
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto';

@Controller('auth')
export class AuthController {
  // Dependency Injection
  constructor(private readonly userService: UserService) {}
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.userService.findUserByEmail(loginDto.email);
    console.log({ user });
    if (!user) {
      throw new HttpException('UNAUTHORIZED Email', HttpStatus.UNAUTHORIZED);
    }
    if (user.password !== loginDto.password) {
      throw new HttpException('UNAUTHORIZED Password', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
