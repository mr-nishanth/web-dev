import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto, UpdateProductDto } from './dto/index.dto';
import { ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<ProductDocument> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  async findAllProducts(): Promise<ProductDocument[]> {
    return this.productModel.find().exec();
  }

  async findOneProduct(id: string): Promise<ProductDocument> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductDocument> {
    return this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
  }

  async deleteProduct(id: string): Promise<ProductDocument> {
    const product = await this.productModel.findByIdAndDelete(id).exec();
    if (!product) {
      throw new NotFoundException();
    }
    return null;
  }
}
