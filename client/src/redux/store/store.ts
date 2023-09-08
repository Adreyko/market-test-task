import {
  configureStore,
  type ConfigureStoreOptions,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";
import sortSlice from "../slices/sortSlice";
import searchSlice from "../slices/searchSlice";
import ratingSlice from "../slices/ratingSlice";
import rangePriceSlice from "../slices/rangePriceSlice";
const reducer = productSlice;
const configreStoreDefaultOptions: ConfigureStoreOptions = { reducer };

export const makeReduxStore = (
  options: ConfigureStoreOptions = configreStoreDefaultOptions
) => {
  const store = configureStore(options);

  return store;
};

export const reduxStore = configureStore({
  reducer: {
    products: productSlice,
    cart : cartSlice,
    sortBy : sortSlice,
    search : searchSlice,
    rating : ratingSlice,
    rangePrice : rangePriceSlice
  },
});

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
