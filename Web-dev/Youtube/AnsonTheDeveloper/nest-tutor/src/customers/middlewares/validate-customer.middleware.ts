/* eslint-disable prettier/prettier */
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`ValidateCustomerMiddleware`);
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Unauthorized, No Authorized Token Provide' });
    }

    if (!(authorization !== 'hell')) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Unauthorized, Invalid Authorized Token Provide' });
    }
    next();
  }
}
