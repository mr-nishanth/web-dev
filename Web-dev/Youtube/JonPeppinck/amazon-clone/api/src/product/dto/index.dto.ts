export class CreateProductDto {
  name: string;

  price: number;

  description?: string;
}

export class UpdateProductDto {
  name?: string;

  price?: number;

  description?: string;
}
