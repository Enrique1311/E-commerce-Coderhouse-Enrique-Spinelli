import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories";
import productsReducer from "../features/products";
import cartReducer from "../features/cart";
import ordersReducer from "../features/orders";
import authReducer from "../features/auth";
import locationsReducer from "../features/locations";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer,
    locations: locationsReducer,
  },
});

export default store;
