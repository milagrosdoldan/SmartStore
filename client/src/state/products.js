import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk("GET_ALL", async (product) => {
  const res = await axios.get("/api/products/", product);
  return res.data;
});

export const getOne = createAsyncThunk("GET_ONE", async (product) => {
  const res = await axios.get(`/api/products/${product._id}`);
  return res.data;
});

export const searchProduct = createAsyncThunk(
  "GET_ONE_PRODUCT_BY_SEARCH",
  async (name) => {
    const res = await axios.get(`/api/products/name/${name}`);

    return res.data;
  }
);

const productsReducer = createReducer([], {
  [getAll.fulfilled]: (state, action) => action.payload,
});

export const searchReducer = createReducer([], {
  [searchProduct.fulfilled]: (state, action) => action.payload,
});

export const oneProductsReducer = createReducer([], {
  [getOne.fulfilled]: (state, action) => action.payload,
});

export default productsReducer;
