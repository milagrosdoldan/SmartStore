import React, { useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { sendMe } from "./state/login";
import Perfil from "./pages/Perfil";
import ProductDetails from "./pages/ProductDetails";
import { getAll } from "./state/products";
import Cart from "./pages/Cart";
import Checkout from "./components/Checkout";
import Category from "./category/Category";
import Search from "./category/Search";
import OrderList from "./pages/OrderList";
import UsersList from "./pages/UsersList";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendMe());
    dispatch(getAll());
  }, []);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Perfil />} />
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/admin/users" element={<UsersList />} />
          <Route path="/admin/users/:id" element={<UserProfile />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
