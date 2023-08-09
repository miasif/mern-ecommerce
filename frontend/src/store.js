import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./redux/slices/apiSlice";
import cartSliceReducer from "./redux/slices/cartSlice";
import authReducer from "./redux/slices/authSlice"; // add this line

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authReducer, // add this line
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
