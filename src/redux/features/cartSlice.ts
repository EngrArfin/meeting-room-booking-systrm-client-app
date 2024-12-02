/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as any,
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const selectSelectedItems = (state: any) =>
  state.products.reducer((total: number, product: any) => {
    return Number(total + product.quantity);
  }, 0);
