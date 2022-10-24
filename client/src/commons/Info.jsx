import {
  Divider,
  Grid,
  styled,
  Typography,
  Button,
  Box,
  Rating,
} from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../state/login";
import { useLocation } from "react-router";

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    width: "100vh",
  },
  [theme.breakpoints.only("md")]: {
    display: "flex",
    flexDirection: "column",
    width: "100vh",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    display: "flex",
    padding: 0,
    width: "100%",
  },
}));

const Info = ({ producto }) => {
  const [value, setValue] = React.useState(2);
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle1">{producto.category}</Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="h4">{producto.name}</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography
          width={{
            xl: "90vh",
            lg: "90vh",
            md: "80vh",
            sm: "60vh",
            xs: "40vh",
          }}
          variant="subtitle1"
        >
          {producto.description}
        </Typography>
        <Typography variant="h5" mt="5px" mb="5px">
          ${producto.price}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(addToCart({ ...producto, amount: 1 }));
          }}
          sx={{
            mt: "auto",
            backgroundColor: "#8d69d4",
            "&:hover": {
              backgroundColor: "#633fa4",
            },
          }}
          endIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Info;
