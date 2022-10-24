import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductsGrill from "../components/ProductsGrill";
import Banner from "../commons/Banner";
import ProductCarousel from "../components/ProductCarousel";
import AnotherBanner from "../commons/AnotherBanner";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Banner />
      <ProductCarousel />
      <AnotherBanner />
      <ProductsGrill />
      <Banner />
    </div>
  );
};

export default Home;
