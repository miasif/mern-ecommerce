import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../actionTypes";
import Cookies from "js-cookie";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        headers: {
          Authorization: "Bearer " + Cookies.get("jwt"),
        },
        body: { ...order },
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApiSlice;
