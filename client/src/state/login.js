import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

//actions
export const signUp = createAsyncThunk("SIGN_UP", async (user) => {
  const res = await axios.post("/api/auth/signup", user);
  return res.data;
});
export const logIn = createAsyncThunk("LOG_IN", async (user) => {
  const res = await axios.post("/api/auth/login", user);
  return res.data;
});
export const sendMe = createAsyncThunk("ME_TOKENJWT", async () => {
  const { data } = await axios.get("/api/auth/me");

  const res = await axios.get(`/api/user/${data._id}`);

  return res.data;
});
export const logOut = createAsyncThunk("LOG_OUT", async () => {
  return (await axios.post("/api/auth/logout")).data;
});
export const addFav = createAsyncThunk("ADD_FAV", async (producto, thunk) => {
  const { user } = thunk.getState();
  return await axios.post(`api/user/favoritos/${user._id}`, {
    favoritos: producto,
  }).data;
});
export const addToCart = createAsyncThunk(
  "ADD_PRODUCT_TO_CART",
  async (producto, thunk) => {
    const { user } = thunk.getState();
    return (await axios.post(`/api/user/carrito/${user._id}`, producto)).data;
  }
);
export const deleteFromCart = createAsyncThunk(
  "DELETE1AMOUNT_FROM_PRODUCT_CART",
  async (producto, thunk) => {
    const { user } = thunk.getState();
    return (await axios.put(`/api/user/deletecarrito/${user._id}`, producto))
      .data;
  }
);
export const realDeleteFromCart = createAsyncThunk(
  "DELETE_PRODUCT_FROM_CART",
  async (producto, thunk) => {
    const { user } = thunk.getState();
    return (await axios.put(`/api/user/deleteProduct/${user._id}`, producto))
      .data;
  }
);

export const checkOut = createAsyncThunk("CHECKOUT_CART", async (id) => {
  const { data } = await axios.post(`/api/orders/${id}`, {});
  const res = await axios.get(`/api/user/${id}`);

  return res.data;
});
//reducer
const loginReducer = createReducer([], {
  [signUp.fulfilled]: (state, action) => action.payload,
  [logIn.fulfilled]: (state, action) => action.payload,
  [sendMe.fulfilled]: (state, action) => action.payload,
  [logOut.fulfilled]: (state, action) => action.payload,
  [addToCart.fulfilled]: (state, action) => action.payload,
  [deleteFromCart.fulfilled]: (state, action) => action.payload,
  [realDeleteFromCart.fulfilled]: (state, action) => action.payload,
  [checkOut.fulfilled]: (state, action) => action.payload,
});
export default loginReducer;
