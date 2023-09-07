import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './schemas/Product.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  async findAll(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }
}
