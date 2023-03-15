import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  getUsers() {
    return { name: 'Nishanth', email: 'nishanth@gmail.com' };
  }

  createUser(req: Request) {
    return req.body;
  }

  updateUser(req: Request, param: { userId: number }) {
    return { body: req.body, param: param?.userId };
  }

  getUser(param: { userId: number }) {
    return { param: param?.userId };
  }

  deleteUser(param: { userId: number }) {
    return { param: param?.userId };
  }
}
