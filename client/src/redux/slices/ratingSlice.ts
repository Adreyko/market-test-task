import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateI {
  rating: number;
}

const initialState: InitialStateI = {
  rating: 0,
};

const ratingSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setRatingProducts(state: InitialStateI, action: PayloadAction<number>) {
      state.rating = action.payload;
    },
  },
});

export const { setRatingProducts } = ratingSlice.actions;
export default ratingSlice.reducer;
