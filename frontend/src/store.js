import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./redux/slices/apiSlice";
import cartSliceReducer from "./redux/slices/cartSlice.js";
import authSliceReducer from "./redux/slices/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
