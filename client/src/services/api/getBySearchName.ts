import axios from "axios";
import { productUrl } from "../../constants/productsUrl";
import { IProduct } from "../../interfaces/interfaces";

export const getBySearchName = async (name : string): Promise<IProduct[]> => {
  const response = await axios.get<IProduct[]>(
    `${productUrl}?search=${name}` as string
  );
  return response.data;
};
