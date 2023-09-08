import { productUrl } from "./../../constants/productsUrl";
import axios from "axios";
import { IProduct } from "../../interfaces/interfaces";

export const getByRating = async (
  rating: number
): Promise<IProduct[]> => {
  const response = await axios.get<IProduct[]>(
    `${productUrl}?rating=${rating}` as string
  );
  return response.data;
};
