import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/interfaces";

type ProductType = IProduct[];

interface InitialStateI {
  products: ProductType;
  error: any;
  status: "loading" | "resolved" | "rejected" | null;
}

const initialState: InitialStateI = {
  status: null,
  error: null,
  products: [],
};

const devicesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state: InitialStateI, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = devicesSlice.actions;
export default devicesSlice.reducer;
