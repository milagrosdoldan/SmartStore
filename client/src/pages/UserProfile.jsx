import {
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UsersList from "./UsersList";
import OrderList from "./OrderList";
const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`/api/user/${id}`).then((result) => setUser(result.data));
  }, []);

  return (
    <>
      <Grid
        sx={{
          paddingTop: "50px",
          minHeight: "100vh",
          backgroundColor: "#212223",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid
          item xs={12} md={6}
          sx={{
            backgroundColor: "#fcfcfc",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            m: 10,
            p: 5,
          }}
        >
          
          <Box display="flex" flexDirection="column" alignItems="center">
            <AccountCircleIcon />
            <Typography>{`${user?.name} ${user?.lastname}`}</Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Personal Details
                </ListSubheader>
              }
            >
              <ListItem>
                <ListItemText primary="Name" secondary={user?.name} />
                <ListItemAvatar></ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText primary="Lastname" secondary={user?.lastname} />
                <ListItemAvatar></ListItemAvatar>
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={user?.email} />
                <ListItemAvatar></ListItemAvatar>
              </ListItem>
            </List>
            <OrderList orders={user?.ordenes} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default UserProfile;
