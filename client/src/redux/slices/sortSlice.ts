import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateI {
  sortBy: "cheapest" | "expensive" | "top"  | ""

}

const initialState: InitialStateI = {
  sortBy: "",

};

const devicesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSortBy(state: InitialStateI, action: PayloadAction<any>) {
      state.sortBy = action.payload;
    },
}
});

export const { setSortBy } = devicesSlice.actions;
export default devicesSlice.reducer;
