import React from "react";
import "../style/spinner.css";
import Sidebar from "../components/Sidebar";
import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  styled,
  Typography,
  CardMedia,
  Avatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import Favorites from "../category/Favorites";
import UserInfo from "../components/UserInfo";

const StyledIcon = styled(ListItemIcon)(({ theme }) => ({
  position: "relative",
  top: "15px",
  left: "70px",
  gap: "15px",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  top: "160px",
  left: "390px",
}));

const Perfil = () => {
  const user = useSelector((state) => state.user);

  // if (!user.username)
  //   return (
  //     <div class="spinner">
  //       <div class="double-bounce1"></div>
  //       <div class="double-bounce2"></div>
  //     </div>
  //   );
  return (
    <Box
      sx={{ width: "100%" }}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#212223"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "50%", marginTop: "100px", marginBottom: "50px" }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ marginBottom: "40px" }}
        >
          <AccountCircleIcon
            className="animate__animated animate__bounceInDown animate__fast"
            sx={{ color: "#633fA4", fontSize: "32px" }}
          />
          <Typography variant="h5" sx={{ marginLeft: "10px", color: "white" }}>
            {user?.username}
          </Typography>
        </Box>
        <UserInfo user={user} />
      </Box>
    </Box>
  );
};

/*      <Sidebar />

<Box width="100%" pl="250px" pt="30px">
  <Box
    className="animate__animated animate__fadeInUp "
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      className="animate__animated animate__fadeInUp "
      display="flex"
      alignItems="center"
      padding="2px"
      borderRadius="15px"
      pt={10}
    >
      <AccountCircleIcon sx={{ fontSize: 80, color: "grey" }} />

      <Typography sx={{ letterSpacing: "5px" }} variant="h4">
        Welcome, {user.username}!
      </Typography>
    </Box>
  </Box>
  <Box
    display="flex"
    justifyContent="center"
    className="animate__animated animate__fadeInUp "
    pt={10}
  >
    <Paper
      sx={{
        width: "40vw",
      }}
    >
      <List>
        <ListItem>
          <ListItemText
            sx={{ textAlign: "center" }}
            primary="Email:"
            secondary={user.email}
          ></ListItemText>
        </ListItem>
      </List>
    </Paper>
  </Box>
 
</Box>
</Box>
*/
/*   <Box display="flex" flexDirection="column">
        {/* <Box sx={{ display: "flex" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className="animate__animated animate__fadeInDown "
          > }
          <Icon
          sx={{
            position: "relative",
            top: "240px",
            left: "300px",
            width: 80,
            height: 80,
            gap: "15px",
          }}
        >
          <AccountCircleIcon sx={{ fontSize: 80, color: "grey" }} />
        </Icon>
        <StyledTypography variant="h4">
          Welcome, {user.username}!
        </StyledTypography>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ position: "relative", top: "170px", left: "320px" }}
        >
          <Paper>
            <List sx={{ height: "250px" }}>
              <ListItem>
                <ListItemText
                  primary="Email:"
                  secondary={user.email}
                ></ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Dirección:"
                  secondary={"Bermudez 2808"}
                ></ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Teléfono:"
                  secondary={"1532860515"}
                ></ListItemText>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Box>

      <CardMedia
        className="animate__animated animate__fadeInDown "
        component="img"
        height="250"
        width="120vw"
        image="https://i.ibb.co/5TYCrCr/Captura-desde-2022-08-29-10-47-51.png"
        alt="green iguana"
      /> 
      */

/*      <Sidebar />

      <StyledCardMedia
        component="img"
        height="250"
        wid
        image="https://i.ibb.co/5TYCrCr/Captura-desde-2022-08-29-10-47-51.png"
        alt="green iguana"
      ></StyledCardMedia>
      <Avatar sx={{}}>H</Avatar>*/
/*  <Box
        component="img"
        sx={{
          width: "1150px",
          marginLeft: "220px",
          height: 250,
          paddingTop: "-5px",
          backgroundColor: "primary.dark",
        }}
        src="https://i.ibb.co/YcDHmT4/Captura-desde-2022-08-29-12-46-55.png"
        alt="The house from the offer."
      ></Box>
      <StyledTypography variant="h3" color="initial">
        Welcome Florencia!
      </StyledTypography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        sx={{ marginLeft: "150px" }}
      >
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Favoritos:" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </List>
          </Collapse>
        </List>

        <List>
          <ListItemButton onClick={secondHandleClick}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Favoritos:" />
            {anotherOper ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={anotherOper} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="Single-line item" />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </List>
          </Collapse>
        </List>
      </Stack>*/

export default Perfil;
