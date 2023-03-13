import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'nishanth@gmail.com',
      name: 'Nishanth M',
    },
    {
      id: 2,
      email: 'vasee@gmail.com',
      name: 'Vaseekaran',
    },
    {
      id: 3,
      email: 'vijay@gmail.com',
      name: 'VijaySurya M',
    },
  ];
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
