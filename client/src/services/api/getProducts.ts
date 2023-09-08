import axios from "axios";
import { productUrl } from "../../constants/productsUrl";
import { IProduct } from "../../interfaces/interfaces";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await axios.get<IProduct[]>(productUrl as string);
  return response.data;
};
