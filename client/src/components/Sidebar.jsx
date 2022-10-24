import "animate.css";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GamesIcon from "@mui/icons-material/Games";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ListIcon from "@mui/icons-material/List";
import LoginIcon from "@mui/icons-material/Login";
import {
  ListItem,
  ListItemButton,
  List,
  styled,
  ListItemText,
  ListItemIcon,
  Box,
  IconButton,
} from "@mui/material";
import { logOut } from "../state/login";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const StyledIcon = styled(ListItemIcon)(({ theme }) => ({
  position: "relative",
  top: "15px",
  left: "70px",
  gap: "15px",
}));

const StyledInputText = styled(ListItemText)(({ theme }) => ({
  fontSize: "1%",
}));

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();
  const handleClick = () => {
    setOpen(!open);
  };

  const user = useSelector((state) => state.user);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          {user.email ? (
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <VerifiedUserIcon />
                </ListItemIcon>
                <StyledInputText primary={user.username} />
              </ListItemButton>
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton>
                <ListItemIcon>{<LoginIcon />}</ListItemIcon>
                <StyledInputText primary={"Log In"} />
              </ListItemButton>
            </Link>
          )}
        </ListItem>

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="CATEGORY" />
        </ListItemButton>

        <List component="div" disablePadding>
          <Link
            to="/category/Mouse"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <MouseOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ fontSize: "1px" }} primary="Computer Mouse" />
            </ListItemButton>
          </Link>
          <Link
            to="/category/Headphones"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <HeadphonesOutlinedIcon />
              </ListItemIcon>
              <StyledInputText primary="Game Headphones" />
            </ListItemButton>
          </Link>{" "}
          <Link
            to="/category/Pad"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <SportsEsportsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Gamepads" />
            </ListItemButton>
          </Link>{" "}
          <Link
            to="/category/Keyboard"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <KeyboardOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Keyboards" />
            </ListItemButton>
          </Link>{" "}
          <Link
            to="/category/Computer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LaptopMacOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Notebooks" />
            </ListItemButton>
          </Link>{" "}
          <Link
            to="/category/Accesories"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <GamesIcon />
              </ListItemIcon>
              <ListItemText primary="Accesorios" />
            </ListItemButton>
          </Link>
        </List>
        <StyledIcon>
          <TwitterIcon /> <FacebookOutlinedIcon /> <AndroidOutlinedIcon />
        </StyledIcon>
        <ListItem>
          {user.email && (
            <ListItemButton
              onClick={() => {
                dispatch(logOut());
              }}
              sx={{ marginTop: "50px" }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <StyledInputText primary="Log Out" />
            </ListItemButton>
          )}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            sx={{
              color: "white",
              borderRadius: 10,
              backgroundColor: "#27333D",
              "&:hover": {
                backgroundColor: "#3F4B55",
              },
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            {<ListIcon sx={{ color: "white", fontSize: 25 }} />}
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
