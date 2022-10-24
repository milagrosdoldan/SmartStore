import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Paper,
  Typography,
  Box,
  Container,
  Grid,
  CssBaseline,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderList = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState();
  const [array, setArray] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/user/${user._id}`)
      .then((result) => setOrders(result.data.ordenes));
  }, []);

  const funtion = () => {
    for (let i = 0; i <= orders?.length; i++) {
      setArray(array.concat(orders[i]));
    }
  };
  funtion();
  console.log(array, "array");
  return (
    <h1>hola</h1>
    // <Grid
    //   sx={{
    //     paddingTop: "50px",
    //     minHeight: "100vh",
    //     backgroundColor: "#212223",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     width: "100%",
    //   }}
    // >
    //   <Grid
    //     sm={{ m: "none" }}
    //     sx={{
    //       backgroundColor: "#fcfcfc",
    //       display: "flex",
    //       flexDirection: "column",
    //       borderRadius: 4,
    //       m: 10,
    //       p: 5,
    //     }}
    //   >
    //     {" "}
    //     <TableContainer component={Paper}>
    //       {" "}
    //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //         {" "}
    //         <TableHead>
    //           {" "}
    //           <TableRow>
    //             <TableCell>Dessert (100g serving)</TableCell>
    //             <TableCell align="right">Date</TableCell>
    //             <TableCell align="right">Fat&nbsp;(g)</TableCell>
    //             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    //             <TableCell align="right">Protein&nbsp;(g)</TableCell>{" "}
    //           </TableRow>{" "}
    //         </TableHead>
    //         <TableBody>
    //           {array.map((e) => {
    //             return (
    //               <TableRow
    //                 key={e.name}
    //                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //               >
    //                 <TableCell component="th">{e.name}</TableCell>
    //                 <TableCell align="right">
    //                   {e.description.slice(0, 70)}
    //                 </TableCell>
    //                 <TableCell align="right">{e.price}</TableCell>
    //                 <TableCell align="right">{e.category}</TableCell>
    //               </TableRow>
    //             );
    //           })}
    //         </TableBody>{" "}
    //       </Table>{" "}
    //     </TableContainer>
    //   </Grid>
    // </Grid>
  );
};

export default OrderList;
