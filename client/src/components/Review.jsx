import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Box, Button, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { checkOut } from "../state/login";
import { useNavigate } from "react-router";

export default function Review() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carrito, name, lastname, direccion, _id, username } = useSelector(
    (state) => state.user
  );
  const subtotal = (car) => {
    const total = car?.reduce((acc, producto) => {
      return (acc += Math.ceil(producto.price) * Math.ceil(producto.amount));
    }, 0);
    return total;
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Final Order
      </Typography>
      <Divider sx={{ width: "26%" }} />
      <List sx={{ width: "70vh" }}>
        {carrito?.map((product, i) => (
          <ListItem key={i} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name.slice(0, 30)}
              secondary={product.description?.substring(0, 100) + "..."}
              sx={{ p: "5px", borderRadius: 1, backgroundColor: "#bababa" }}
            />
            <Box display="flex" flexDirection="column" alignItems="flex-end">
              <Typography variant="body1">
                $ {Math.ceil(product.price * product.amount)}
              </Typography>
              <Typography sx={{ ml: "10px" }} variant="body2">
                Quantity:{product.amount}
              </Typography>
            </Box>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {subtotal(carrito)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping Information
          </Typography>
          <Typography gutterBottom>
            <strong>For:</strong> {username}
          </Typography>
          <Typography gutterBottom>
            <strong>Adress:</strong> {direccion}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
