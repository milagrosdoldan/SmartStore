import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getOne } from "../state/products";
import "animate.css";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import {
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

const ProductsGrill = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);

  const handleClick = (product) => {
    dispatch(getOne(product)).then(() => navigate(`/products/${product._id}`));
  };

  return (
    <>
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
    </>
  );
};

export default ProductsGrill;
