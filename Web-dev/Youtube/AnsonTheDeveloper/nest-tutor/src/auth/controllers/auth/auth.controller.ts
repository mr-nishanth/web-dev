import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('local'))
@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Request() req) {}
}
