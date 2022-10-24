import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import loginReducer from "./login";
import productsReducer from "./products";
import { oneProductsReducer } from "./products";
import { searchReducer } from "./products";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: loginReducer,
    products: productsReducer,
    oneProduct: oneProductsReducer,
    searchProduct: searchReducer,
  },
});

export default store;
