/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  // msg?: string(optional), status?: HttpStatus(optional)
  constructor(msg?: string, status?: HttpStatus) {
    super(msg ?? 'User not Found', status ?? HttpStatus.NOT_FOUND);
  }
}
