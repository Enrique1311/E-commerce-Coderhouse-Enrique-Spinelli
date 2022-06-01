import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/products";
import { DB_URL } from "../../Constants/firebase";

const initialState = {
  value: {
    cart: [],
    response: {},
    loading: false,
    error: false,
  },
};

export const confirmAll = createAsyncThunk(
  "cart/confirm",
  async (items, asyncThunk) => {
    const resp = await fetch(`${DB_URL}orders.json`, {
      method: "POST",
      body: JSON.stringify({
        date: new Date().toLocaleDateString(),
        items: items,
      }),
    });
    const data = resp.json();
    return data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const repeatedProduct = state.value.cart.find(
        (product) => product.id === action.payload.id
      );
      if (repeatedProduct) {
        state.value.cart.map((item) => {
          if (item.id === action.payload.id) item.quantity++;
          return item;
        });
      } else {
        const product = PRODUCTS.find(
          (product) => product.id === action.payload.id
        );
        state.value.cart.push({ ...product, quantity: 1 });
      }
    },
    removeItem: () => {},
  },
  extraReducers: {
    [confirmAll.pending]: (state) => {
      state.value.loading = true;
    },
    [confirmAll.fulfilled]: (state, { payload }) => {
      state.value.response = payload;
      state.value.loading = false;
    },
    [confirmAll.rejected]: (state) => {
      state.value.loading = false;
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
