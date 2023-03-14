/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAddressDto } from './CreateAddress.dto';
export class CreateCustomerDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmptyObject() // If address is optional [remove @IsNotEmptyObject()]
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
