import { productUrl } from "./../../constants/productsUrl";
import axios from "axios";
import { IProduct } from "../../interfaces/interfaces";

export const getFilteredProducts = async (param: string): Promise<IProduct[]> => {
  const response = await axios.get<IProduct[]>(
    `${productUrl}?sortBy=${param}` as string
  );
  return response.data;
};
