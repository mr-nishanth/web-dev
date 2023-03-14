/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  // Override use method
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`ValidateCustomerAccountMiddleware`);
    const { valid } = req.headers;
    console.log({ valid });
    if (!valid) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ error: 'Account is Invalid' });
    }
    next();
  }
}
