import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';
import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description?: string;
}

export class UpdateProductDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description?: string;
}

// DTO:

// export class OnlyIDParamDTO {
//   // @ApiProperty({
//   //   description: 'Id',
//   //   required: true,
//   //   type: String,
//   //   default: '61d9cfbf17ed7311c4b3e485',
//   // })
//   @IsMongoId()
//   @IsString()
//   @Transform((value) => SafeMongoIdTransform(value))
//   id: string;
// }
// // Transforms:
// export const SafeMongoIdTransform = ({ value }) => {
//   console.log({ value });

//   try {
//     if (
//       Types.ObjectId.isValid(value) &&
//       new Types.ObjectId(value).toString() === value
//     ) {
//       return value;
//     }
//     throw new BadRequestException('Id validation fail');
//   } catch (error) {
//     throw new BadRequestException('Id validation fail');
//   }
// };
