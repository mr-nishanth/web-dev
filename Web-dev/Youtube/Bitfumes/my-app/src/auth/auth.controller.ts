import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('local'))
  // @Post('login')
  // async login(@Body() loginDto: LoginDto) {
  //   return await this.authService.validateUser(
  //     loginDto.email,
  //     loginDto.password,
  //   );
  // }

  // Use Passport way
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request) {
    return req.user;
  }
}
