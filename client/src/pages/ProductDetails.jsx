import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "../style/spinner.css";
import { Divider, Grid } from "@mui/material";
import Comment from "../commons/Comment";
import ImageGrid from "../commons/ImageGrid";
import Info from "../commons/Info";
import MainImage from "../commons/MainImage";
import { Box } from "@mui/system";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const url = useLocation().pathname.split("/products/")[1];
  const [product, setProduct] = useState({});

  //* Obtener producto actual para renderizar
  useEffect(() => {
    axios.get(`/api/products/${url}`).then((result) => setProduct(result.data));
  }, []);

  if (!product.name) {
    return (
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    );
  }

  return (
    <>
      <Box
        marginTop="100px"
        display="flex"
        flexDirection={{
          xl: "row",
          lg: "row",
          md: "column",
          sm: "column",
          xs: "column",
        }}
      >
        <Box
          justifyContent="center"
          margin={{
            xl: "50px",
            lg: "50px",
            md: "50px",
            sm: "none",
            xs: "none",
          }}
          width={{ xl: "50%", lg: "50%", md: "100%", sm: "100%", xs: "100%" }}
          display="flex"
          flexDirection={{
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          }}
        >
          <Box display="flex" justifyContent="center">
            <ImageGrid
              images={product.image}
              onSelect={setSelectedImage}
              selectedImage={selectedImage}
            />
          </Box>
          <Box
            width={{
              xl: "80vh",
              lg: "80vh",
              md: "80vh",
              sm: "50vh",
              xs: "50vh",
            }}
          >
            <MainImage src={product.image[selectedImage]} />
          </Box>
        </Box>

        <Box display="flex" justifyContent="center">
          <Info producto={product} />
        </Box>
      </Box>
      <Divider sx={{ paddingBottom: "30px " }} />
      <Comment />
    </>
  );
};

export default ProductDetails;
