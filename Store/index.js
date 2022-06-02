import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories";
import productsReducer from "../features/products";
import cartReducer from "../features/cart";
import ordersReducer from "../features/orders";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
});

export default store;
