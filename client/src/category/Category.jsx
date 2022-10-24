import {
  Box,
  CardActions,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Button,
  styled,
  CardHeader,
  Avatar,
} from "@mui/material";
import axios from "axios";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { getOne } from "../state/products";
import { useNavigate } from "react-router";
import Banner from "../commons/Banner";

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
    p: 8,
    xs: 4,
    width: "50vh",
    height: "full",
    spacing: 5,
    marginBottom: "50px",
  },
  [theme.breakpoints.up("md")]: {
    margin: "0 auto",
    p: 8,
    width: "80vw",
    spacing: 4,
    marginBottom: "50px",
  },
}));

const Category = () => {
  const url = useLocation().pathname.split("category/")[1];
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/products/cat/${url}`).then((res) => setProducts(res.data));
  }, [url]);

  const handleClick = (product) => {
    dispatch(getOne(product)).then(() => navigate(`/products/${product._id}`));
  };

  return (
    <>
      <Box sx={{ marginTop: "50px" }} container spacing={5}>
        <Box
          className="animate__animated animate__fadeIn animate__slow"
          sx={{
            p: 3,
            backgroundImage:
              "url(https://media.istockphoto.com/vectors/glitch-futuristic-background-random-color-shapes-digital-noise-effect-vector-id1251410783?k=20&m=1251410783&s=170667a&w=0&h=k20BkB_YqwxyfFxhEqJwQU3Nsh2Um0cyxrHAzuM2_O0=)",
            maxWidth: "full",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "#482E7D",
            boxShadow: "4px 14px 39px -10px rgba(0,0,0,0.75);",
          }}
        >
          <Typography
            fontSize="40px"
            fontStyle="normal"
            color="black"
            sx={{
              marginTop: "10px",
              fontWeight: 800,
              textAling: "center",
              textTransform: "uppercase",
              color: "white",
            }}
          >
            {url}
          </Typography>
        </Box>
        <StyledGrid container spacing={5}>
          {products?.map((card) => (
            <Grid
              item
              // maxHeight="80vh"
              key={card.name}
              xs={12}
              sm={12}
              md={4}
              className="animate__animated animate__fadeInUp animate__slow"
            >
              <Card
                sx={{
                  width: "full",
                  height: "full",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:
                    "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
                  transition: "all .2s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      sx={{ color: "white", height: "35px" }}
                    >
                      <SmartToyIcon
                        className="animate__animated animate__bounceInDown animate__fast"
                        sx={{ color: "#633fA4", fontSize: "32px" }}
                      />
                    </Avatar>
                  }
                />
                <CardMedia
                  component="img"
                  sx={{
                    height: "20vh",
                    maxHeight: "30%",
                    objectFit: "contain",
                  }}
                  image={card.image[0]}
                  alt="foto de producto"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={{ height: "90px", textAlign: "center" }}
                  >
                    {card?.name.slice(0, 40)}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={{ textAlign: "center", color: "#633fa4" }}
                  >
                    ${card?.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={() => {
                      handleClick(card);
                    }}
                    variant="contained"
                    sx={{
                      width: "30vh",
                      backgroundColor: "#8d69d4",
                      "&:hover": {
                        backgroundColor: "#633fa4",
                      },
                    }}
                  >
                    Buy NOW!
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </StyledGrid>
        <Banner />
      </Box>
    </>
  );
};

export default Category;
