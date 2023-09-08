import { Controller, Get, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get("/")
  async findAll(
    @Query("sortBy") sortBy: string,
    @Query("search") search: string,
    @Query("rating") rating: number
  ) {
    const allProducts = await this.productsService.findAll(sortBy);
    const someProducts = await this.productsService.findByName(search);
    const productsByRating = await this.productsService.findByRating(rating);
    if (search) {
      return someProducts;
    }
    if (rating) {
      return productsByRating;
    } else {
      return allProducts;
    }
  }
}
