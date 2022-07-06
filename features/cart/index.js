import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/products";
import { DB_URL } from "../../Constants/firebase";

const initialState = {
  value: {
    cart: [],
    totalPrice: 0,
    totalQuantity: 0,
    response: {},
    loading: false,
    error: false,
  },
};

export const confirmAll = createAsyncThunk(
  "cart/confirm",
  async (items, asyncThunk) => {
    try {
      const resp = await fetch(`${DB_URL}orders/.json`, {
        method: "POST",
        body: JSON.stringify({
          date: new Date().toLocaleDateString(),
          items: items,
        }),
      });
      const data = resp.json();
      return data;
    } catch (error) {
      return rejectWithValue("Hubo un error al crear la órden");
    }
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
          if (item.id === action.payload.id) {
            item.quantity++;
            state.value.totalPrice += item.price;
            state.value.totalQuantity++;
          }
          return item;
        });
      } else {
        const product = PRODUCTS.find(
          (product) => product.id === action.payload.id
        );
        state.value.totalPrice += product.price;
        state.value.totalQuantity++;
        state.value.cart.push({
          ...product,
          quantity: 1,
        });
      }
    },
    removeItem: (state, { payload }) => {
      state.value.cart = state.value.cart.filter(
        (product) => product.id !== payload.id
      );
      state.value.totalPrice -= payload.price * payload.quantity;
      state.value.totalQuantity -= payload.quantity;
    },
  },
  extraReducers: {
    [confirmAll.pending]: (state) => {
      state.value.loading = true;
    },
    [confirmAll.fulfilled]: (state, { payload }) => {
      state.value.response = payload;
      state.value.loading = false;
      state.value.cart = [];
      state.value.totalPrice = 0;
      state.value.totalQuantity = 0;
    },
    [confirmAll.rejected]: (state) => {
      state.value.loading = false;
      state.value.error = true;
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
