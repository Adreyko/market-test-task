import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateI {
  range: number[];
}

const initialState: InitialStateI = {
  range: [],
};

const rangeSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setRangePrice(state: InitialStateI, action: PayloadAction<any>) {
      state.range = action.payload;
    },
  },
});

export const { setRangePrice } = rangeSlice.actions;
export default rangeSlice.reducer;
