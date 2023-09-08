import { createAsyncThunk } from "@reduxjs/toolkit";
import { setProducts } from "../productSlice";
import { getProducts } from "../../../services/api/getProducts";
import { IProduct } from "../../../interfaces/interfaces";
import { ReduxState } from "../../store/store";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { dispatch, getState }) => {
    const sortType = (getState() as ReduxState).sortBy.sortBy;
    const searchValue = (getState() as ReduxState).search.search;
    const ratingValue = (getState() as ReduxState).rating.rating;
    const minPriceRange = (getState() as ReduxState).rangePrice.range[0];
    const maxPriceRange = (getState() as ReduxState).rangePrice.range[1];
    
    const data: IProduct[] = await getProducts({
      name: searchValue,
      sort: sortType,
      filteredRating: ratingValue,
      minPrice: minPriceRange,
      maxPrice: maxPriceRange,
    });

    dispatch(setProducts(data));
  }
);
