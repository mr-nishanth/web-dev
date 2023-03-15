import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  profile() {
    return { message: 'Protected Route' };
  }
}
