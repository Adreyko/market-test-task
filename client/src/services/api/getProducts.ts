import axios from "axios";
import { productUrl } from "../../constants/productsUrl";
import { IProduct } from "../../interfaces/interfaces";

export const getProducts = async ({
  name,
  sort,
  rating,
  filteredRating,
  minPrice,
  maxPrice,
}: {
  name?: string;
  sort?: string;
  rating?: boolean;
  filteredRating?: number;
  minPrice?: number;
  maxPrice?: number;
} = {}): Promise<IProduct[]> => {
  const params: Record<string, any> = {};

  if (name) {
    params.name = name;
  }

  if (sort) {
    params.sort = sort;
  }

  if (rating) {
    params.rating = rating;
  }

  if (filteredRating) {
    params.filteredRating = filteredRating;
  }

  if (minPrice) {
    params.minPrice = minPrice;
  }

  if (maxPrice) {
    params.maxPrice = maxPrice;
  }

  const response = await axios.get<IProduct[]>(productUrl as string, {
    params,
  });

  return response.data;
};
