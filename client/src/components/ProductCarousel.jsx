import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { CardMedia, styled } from "@mui/material";
import { Link } from "react-router-dom";
import BuyBottom from "../commons/BuyBottom";

const StyledAvatar = styled(CardMedia)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: scale(1.3);
  }
  `}
`;

const ProductCarousel = () => {
  const products = useSelector((state) => state.products);
  const productos = products.slice(5, 8);

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6, marginTop: "-15px" }}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ fontWeight: 800, marginBottom: "-10px" }}
        >
          MOST POPULAR
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {productos?.map((prod) => (
            <Grid item key={prod._id} xs={12} sm={prod.name} md={4}>
              <Card>
                <CardHeader
                  title={prod.name.slice(0, 14)}
                  titleTypographyProps={{ align: "center" }}
                  action={<StarIcon />}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    color: "white",
                    backgroundColor: "#310268",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      sx={{ marginBottom: "10px" }}
                    >
                      ${prod.price}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <StyledAvatar
                      component="img"
                      sx={{
                        maxHeight: "15%",
                        objectFit: "contain",
                      }}
                      image={prod.image}
                      alt="foto de producto"
                    />
                    <Box sx={{ marginTop: "20px" }}>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/products/${prod._id}`}
                      >
                        <BuyBottom />
                      </Link>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ProductCarousel;
