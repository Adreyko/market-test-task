import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Product } from "./schemas/Product.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  async findAll(sortBy?: string): Promise<Product[]> {
    const pipeline: any[] = [
      {
        $match: { rate: { $exists: true, $not: { $size: 0 } } },
      },
      {
        $addFields: {
          averageRate: { $avg: "$rate" },
        },
      },
    ];

    if (sortBy === "cheapest") {
      pipeline.push({ $sort: { price: 1 } });
    } else if (sortBy === "expensive") {
      pipeline.push({ $sort: { price: -1 } });
    } else if (sortBy === "top") {
      pipeline.push({ $sort: { averageRate: -1 } });
    }

    const products = await this.productModel.aggregate(pipeline).exec();

    return products;
  }

  async findByName(search?: string): Promise<Product[]> {
    const findByImageName = await this.productModel.find({
      image: { $regex: new RegExp(search, "i") },
    });

    return findByImageName;
  }

  async findByRating(rating?: number) {
    const pipeline: any[] = [
      {
        $match: { rate: { $exists: true, $not: { $size: 0 } } },
      },
      {
        $addFields: {
          averageRate: { $avg: "$rate" },
        },
      },
    ];
    const convertedRation = Number(rating)
    const products = await this.productModel.aggregate(pipeline).exec();
    const filteredByRating = products.filter((el) => el.averageRate >= convertedRation);
    return filteredByRating;
  }
}
