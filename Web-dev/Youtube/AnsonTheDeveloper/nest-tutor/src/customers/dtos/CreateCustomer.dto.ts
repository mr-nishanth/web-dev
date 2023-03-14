/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';
export class CreateCustomerDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;
}
