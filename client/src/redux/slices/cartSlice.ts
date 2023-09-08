import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/interfaces";

type ProductType = IProduct[];

interface InitialStateI {
  cart: ProductType;
}

const initialState: InitialStateI = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: InitialStateI, action: PayloadAction<IProduct>) {
      state.cart.push(action.payload)
    },
    removeFromCart(state: InitialStateI, action: PayloadAction<string>) {
      state.cart = state.cart.filter((el) => el._id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
