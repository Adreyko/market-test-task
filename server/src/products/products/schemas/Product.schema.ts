import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;
@Schema()
export class Product {
  @Prop()
  image: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  rate: Array<number>;
  @Prop()
  averageRate : number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
