import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'nishanth@gmail.com',
    },
    {
      id: 2,
      email: 'vasee@gmail.com',
    },
    {
      id: 3,
      email: 'vijay@gmail.com',
    },
  ];
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
