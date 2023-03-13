import { Injectable } from '@nestjs/common';

import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
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
    return this.customers.find((customer) => customer.id === id);
  }

  getCustomers() {
    return this.customers;
  }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    return this.customers.push(createCustomerDto);
  }
}
