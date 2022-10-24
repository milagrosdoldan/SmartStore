import { Typography, Box, styled, Divider, CssBaseline } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
import Product2 from "../components/Product2";
import { Link } from "react-router-dom";
import CheckoutButton from "../commons/CheckoutButton";
import { useSelector } from "react-redux";
import "../style/spinner.css";

const StyledGrid = styled("Grid")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    display: "flex",
    padding: 0,
    width: "100%",
  },
}));

const StyledBox = styled("Grid")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    display: "flex",
    flexDirection: "column",
    width: "40%",
    paddingTop: "100px",
  },
}));

const ShoppingBox = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    paddingTop: "86px",
    backgroundColor: "#212223",
    with: "100%",
    height: "100%",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "86px",
    backgroundColor: "#212223",
    width: "70%",
  },
}));

const BuyBox = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    backgroundColor: "#212223",
    with: "70%",
    height: "40%",
  },
  [theme.breakpoints.only("md")]: {
    marginTop: "-7px",
    backgroundColor: "#212223",
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "-8.5px",
    backgroundColor: "#212223",
    width: "90%",
  },
}));
const Cart = () => {
  const { carrito } = useSelector((state) => state.user);

  const subtotal = (car) => {
    const total = car?.reduce((acc, producto) => {
      return (acc += Math.ceil(producto.price) * Math.ceil(producto.amount));
    }, 0);
    return total;
  };

  return (
    <CssBaseline>
      <StyledGrid>
        <ShoppingBox display="flex" flexDirection="column">
          <Paper sx={{ margin: "14px" }} elevation={2}>
            <Box
              sx={{
                display: "flex",
                height: "6em",
              }}
              paddingX={2}
              paddingY={4}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 500, marginLeft: "15px" }}
              >
                Shopping Cart
              </Typography>
            </Box>
          </Paper>
          <Box>
            {carrito?.map((producto) => {
              return <Product2 producto={producto} />;
            })}
          </Box>
        </ShoppingBox>

        <StyledBox sx={{ backgroundColor: "#212223" }}>
          <BuyBox>
            <Paper elevation={2} sx={12}>
              <Box p={3}>
                {" "}
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  Purchase Summary
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  {carrito?.map((e) => {
                    return (
                      <TableContainer>
                        <Table sx={{ width: 360 }} aria-label="spanning table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Detail</TableCell>
                              <TableCell align="right">Qty.</TableCell>
                              <TableCell align="right">Subtotal</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {carrito.map((e) => (
                              <TableRow key={e._id}>
                                <TableCell>{e.name?.slice(0, 30)}</TableCell>
                                <TableCell align="right">{e?.amount}</TableCell>
                                <TableCell align="right">
                                  $ {Math.ceil(e?.price * e?.amount)}
                                </TableCell>
                              </TableRow>
                            ))}

                            <TableRow>
                              <TableCell colSpan={2}>Total</TableCell>
                              <TableCell align="right">
                                ${subtotal(carrito)}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    );
                  })}
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to="/checkout"
                    style={{ textDecoration: "none", marginTop: "15px" }}
                  >
                    <CheckoutButton />
                  </Link>
                </Box>
              </Box>
            </Paper>
          </BuyBox>
        </StyledBox>
      </StyledGrid>
    </CssBaseline>
  );
};

/* {/* // Titulo del carrito 
<Grid container spacing={3} my={0.3} paddingTop="100px">
<Grid item xs={8} sx={{ marginBottom: -50 }}>
  <Paper elevation={1}>
    <Box
      sx={{
        display: "flex",
        height: "6em",
      }}
      paddingX={2}
      paddingY={4}
    >
      <ShoppingCartIcon />
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        Shopping Cart
      </Typography>
    </Box>
  </Paper>
</Grid>

<Grid item xs={4}>
  <Paper elevation={1}>
    <Box p={3}>
      {" "}
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        <ShoppingBagIcon /> Resumen de Compra
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Total
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          ${subtotal(carrito)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <CheckoutButton />
        </Link>
      </Box>
    </Box>
  </Paper>
</Grid>

  tarjetas de aniadido carrito 
<Grid item xs={12} sx={{ marginTop: -10 }}>
 {carrito ? carrito.map((producto) => {
    return <Product2 producto={producto} />
  }) : <p>prueba carrito</p>} 

  {carrito?.map((producto) => {
    return <Product2 producto={producto} />;
  })}
</Grid>
</Grid> */

export default Cart;
