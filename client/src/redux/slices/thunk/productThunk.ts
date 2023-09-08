import { createAsyncThunk } from "@reduxjs/toolkit";
import { setProducts } from "../productSlice";
import { getProducts } from "../../../services/api/getProducts";
import { IProduct } from "../../../interfaces/interfaces";
import { getFilteredProducts } from "../../../services/api/getFilderedProducts";
import { getBySearchName } from "../../../services/api/getBySearchName";
import { getByRating } from "../../../services/api/getByRating";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { dispatch, getState }) => {
    const sortType = (getState() as any).sortBy;
    const searchValue = (getState() as any).search;
    const ratingValue = (getState() as any).rating;
    if (sortType.sortBy.length !== 0) {
      const data: IProduct[] = await getFilteredProducts(sortType.sortBy);
      dispatch(setProducts(data));
    } else if (searchValue.search.length !== 0) {
      const data: IProduct[] = await getBySearchName(searchValue.search);
      dispatch(setProducts(data));
    } else if (ratingValue) {
      const data: IProduct[] = await getByRating(ratingValue.rating);
      dispatch(setProducts(data));
    } else {
      const data: IProduct[] = await getProducts();
      dispatch(setProducts(data));
    }
  }
);
