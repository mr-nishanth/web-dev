import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  getUsers() {
    return { name: 'Nishanth', email: 'nishanth@gmail.com' };
  }

  createUser(body: any) {
    return body;
  }

  updateUser(body: any, param: { userId: number }) {
    return { body, param: param?.userId };
  }

  getUser(param: { userId: number }) {
    return { param: param?.userId };
  }

  deleteUser(param: { userId: number }) {
    return { param: param?.userId };
  }
}
