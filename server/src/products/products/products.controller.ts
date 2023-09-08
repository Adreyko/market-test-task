import { Controller, Get, Query, Req } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Request } from "express";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get("/")
  async findProducts(@Req() req: Request) {

    return this.productsService.findAll(req);
  }
}