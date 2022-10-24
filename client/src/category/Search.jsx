import {
  Box,
  CardActions,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Button,
  CardHeader,
  Avatar,
  styled,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOne } from "../state/products";
import { useNavigate } from "react-router";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SmartToyIcon from "@mui/icons-material/SmartToy";
const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.searchProduct);

  const handleClick = (product) => {
    dispatch(getOne(product)).then(() => navigate(`/products/${product._id}`));
  };

  const StyledGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      p: 8,
      xs: 4,
      width: "50vh",
      height: "full",
      spacing: 5,
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 auto",
      p: 8,
      width: "80vw",
      spacing: 4,
      marginBottom: "50px",
    },
  }));

  return (
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
        <LocalMallIcon fontSize="large" sx={{ color: "#CDD0D4" }} />
        <Typography
          variant="h2"
          color="initial"
          sx={{ textAling: "center", color: "#CDD0D4" }}
        >
          {"Results"}
        </Typography>
      </Box>
      <StyledGrid container spacing={5}>
        {products?.map((card) => (
          <Grid
            item
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
                  <SmartToyIcon
                    className="animate__animated animate__bounceInDown animate__fast"
                    sx={{ color: "#633fA4", fontSize: "32px" }}
                  />
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
    </Box>
  );
};

export default Search;
