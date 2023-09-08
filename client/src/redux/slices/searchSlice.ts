import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateI {
  search: string;
}

const initialState: InitialStateI = {
  search: "",
};

const searchSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchedProducts(state: InitialStateI, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSearchedProducts } = searchSlice.actions;
export default searchSlice.reducer;
