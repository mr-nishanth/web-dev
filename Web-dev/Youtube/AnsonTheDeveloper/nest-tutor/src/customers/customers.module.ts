import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customer-account.middleware';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    //* Method 1
    // consumer.apply(ValidateCustomerMiddleware).forRoutes(CustomersController) // All routes

    //* Method 3 All routes exclude some paths
    // consumer.apply(ValidateCustomerMiddleware).exclude({
    //  path:'api/customers/create',
    //  method: RequestMethod.POST,
    // }).forRoutes(CustomersController)

    //* Method 2
    consumer
      .apply(
        ValidateCustomerMiddleware,
        ValidateCustomerAccountMiddleware,
        (req: Request, res: Response, next: NextFunction) => {
          console.log('Function Middleware');
          const { valid: funcValid } = req.headers;
          console.log({ funcValid });
          next();
        },
      )
      .forRoutes(
        {
          path: 'customers/search/:id',
          method: RequestMethod.GET,
        },
        {
          path: 'customers/:id',
          method: RequestMethod.GET,
        },
      );
  }
}
