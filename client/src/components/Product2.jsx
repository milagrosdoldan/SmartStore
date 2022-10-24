import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  Table,
  TableBody,
  Box,
  styled,
  IconButton,

} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart, realDeleteFromCart } from "../state/login";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CardMediaStyled = styled("CardMedia")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    width: "full",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    display: "flex",
    padding: 0,
    width: "full",
  },
}));
const Product2 = ({ producto }) => {
  const dispatch = useDispatch();
  const [quantitie, setQuantitie] = useState(1);

  const handleAdd = (event) => {
    dispatch(addToCart({ ...producto, amount: producto.amount + 1 }));
  };

  const handleDelete = (event) => {
    dispatch(deleteFromCart({ ...producto, amount: producto.amount - 1 }));
  };

  return (
    <>
      <Grid item xs={12} md={6}>
        {producto ? (
          <Card
            sx={{
              margin: "15px",

              display: "flex",
              p: "15px",
            }}
          >
            <IconButton
              onClick={() => dispatch(realDeleteFromCart(producto))}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            <CardMedia
              component="img"
              sx={{
                marginRight: "15px",
                width: 100,
                display: { xs: "none", sm: "block" },
              }}
              image={producto?.image}
              alt={producto?.name}
            />

            <TableContainer>
              <Table aria-label="simple table">
                <TableHead sx={{ height: "15px" }}>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key={producto?._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={{ width: "70vh" }}>
                      {producto?.name}
                    </TableCell>
                    <TableCell align="right">{producto?.price}</TableCell>
                    <TableCell align="right">
                      {
                        <Box
                          sx={{ fontSize: "10px" }}
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                        >
                          <RemoveIcon
                            sx={{
                              fontSize: "medium",
                              marginLeft: "20px",
                              cursor: "pointer",
                            }}
                            onClick={() => handleDelete()}
                          />
                          <Box sx={{ fontSize: "15px", margin: "5px" }}>
                            {producto?.amount > 0 ? producto?.amount : "1"}
                          </Box>
                          <AddIcon
                            sx={{ fontSize: "medium", cursor: "pointer" }}
                            onClick={() => handleAdd()}
                          />
                        </Box>
                      }
                    </TableCell>
                    <TableCell align="right">
                      $ {Math.ceil(producto?.price * producto?.amount)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        ) : (
          <Card
            sx={{
              margin: "15px",

              display: "flex",
              p: "15px",
            }}
          >
            <h1>NO PRODUCTS YET</h1>
          </Card>
        )}
      </Grid>
    </>
  );
};

/* <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {producto.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary"></Typography>
            <Typography variant="subtitle1" paragraph>
              {producto.description?.slice(0, 80)}...
            </Typography>

            <Box display="flex" alignItems="center" justifyContent="flex-start">
              <Button
                sx={{
                  mt: "auto",
                  backgroundColor: "#8d69d4",
                  "&:hover": {
                    backgroundColor: "#633fa4",
                  },
                }}
                onClick={() => dispatch(realDeleteFromCart(producto))}
                variant="contained"
                color="warning"
                endIcon={<DeleteIcon />}
              >
                {" "}
                Quitar
              </Button>
              <RemoveIcon
                sx={{ marginLeft: "20px", cursor: "pointer" }}
                onClick={() => handleDelete()}
              />
              <Box sx={{ fontSize: "20px", margin: "5px" }}>
                {producto.amount > 0 ? producto.amount : "1"}
              </Box>
              <AddIcon sx={{ cursor: "pointer" }} onClick={() => handleAdd()} />
            </Box>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={producto.image}
            alt={producto.name}
          />*/

export default Product2;
