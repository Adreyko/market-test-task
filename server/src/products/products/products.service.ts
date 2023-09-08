import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Product } from "./schemas/Product.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Request } from "express";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  async findAll(req: Request) {
    const { name, sort, filteredRating, minPrice, maxPrice } = req.query;

    const query: any = {};

    if (name) {
      query.image = new RegExp(name.toString(), "i");
    }

    const mongooseQuery = this.productModel.find(query);

    if (sort) {
      if (sort === "cheapest") {
        mongooseQuery.sort({ price: 1 });
      } else if (sort === "expensive") {
        mongooseQuery.sort({ price: -1 });
      } else if (sort === "top") {
        mongooseQuery.sort({ averageRate: -1 });
      }
    }

    if (filteredRating) {
      mongooseQuery.where({ averageRate: { $gte: Number(filteredRating) } });
    }

    if (minPrice || maxPrice) {
      const priceFilter: any = {};
      if (minPrice) {
        priceFilter.$gte = Number(minPrice);
      }
      if (maxPrice) {
        priceFilter.$lte = Number(maxPrice);
      }
      mongooseQuery.where({ price: priceFilter });
    }

    console.log(mongooseQuery.getQuery());
    return mongooseQuery.exec();
  }
}
