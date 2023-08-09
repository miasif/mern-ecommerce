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
    getOrderDetails: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
        headers: {
          Authorization: "Bearer " + Cookies.get("jwt"),
        },
      }),

      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery } =
  orderApiSlice;
