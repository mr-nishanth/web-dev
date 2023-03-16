import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/index.dto';
import { ProductService } from './product.service';
import { ProductDocument } from './schema/product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductDocument> {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAllProducts(): Promise<ProductDocument[]> {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  findOneProduct(@Param('id') id: string): Promise<ProductDocument> {
    return this.productService.findOneProduct(id);
  }

  @Patch(':id')
  findProductAndUpdate(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ProductDocument> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  findProductAndDelete(@Param('id') id: string): Promise<ProductDocument> {
    return this.productService.deleteProduct(id);
  }
}
