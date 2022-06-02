import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/firebase";

const initialState = {
  value: {
    orders: [],
    loading: false,
    error: false,
  },
};

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (asyncThunk) => {
    try {
      const resp = await fetch(`${DB_URL}orders.json`);
      const data = Object.values(await resp.json());
      return data;
    } catch (error) {
      return rejectWithValue("Hubo un error");
    }
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getOrders.padding]: (state) => {
      state.value.loading = true;
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      state.value.loading = false;
      state.value.orders = payload;
    },
    [getOrders.rejected]: (state) => {
      state.value.loading = false;
      state.value.error = true;
    },
  },
});
export default orderSlice.reducer;
