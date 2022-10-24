import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
const UsersList = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios.get("/api/user/").then((result) => setUsers(result.data));
  }, []);

  return (
    <>
      <Grid m="0 auto" container spacing={2}>
        <Grid item xs={20} md={6}>
          <Typography variant="h2">Users</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Full Name</TableCell>
                  <TableCell align="right">Active</TableCell>
                  <TableCell align="right">Admin</TableCell>
                  <TableCell align="right">Info</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.date.slice(0, 10)}
                    </TableCell>
                    <TableCell align="right">{`${row.name} ${row.lastname}`}</TableCell>
                    <TableCell align="right">
                      {row.userStatus ? "true" : "false"}
                    </TableCell>
                    <TableCell align="right">
                      {row.isAdmin ? "true" : "false"}
                    </TableCell>
                    <TableCell align="right">
                      <Link to={`${row._id}`}>
                        <AddCircleOutlineIcon />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default UsersList;
