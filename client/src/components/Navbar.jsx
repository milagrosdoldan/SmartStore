import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Box, IconButton, Typography, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "animate.css";
import Sidebar from "./Sidebar";
import Search from "./Search";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "#212223" }}>
          <Box sm={2} display="flex" flexDirection="row">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              <Typography variant="h5" sx={{ color: "white" }}>
                SmartStore
                <SmartToyIcon
                  className="animate__animated animate__bounceInDown animate__fast"
                  sx={{ color: "#633fA4", fontSize: "32px" }}
                />
              </Typography>
            </Link>
          </Box>
          <Search />
          <Box display="flex" flexDirection="row" gap="15px">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <IconButton
                sx={{
                  borderRadius: 10,
                  backgroundColor: "#27333D",
                  "&:hover": {
                    backgroundColor: "#3F4B55",
                  },
                }}
              >
                <Badge badgeContent={user.carrito?.length} color="warning">
                  <ShoppingCartOutlinedIcon
                    sx={{ color: "white", fontSize: 25 }}
                  />
                </Badge>
              </IconButton>
            </Link>
            <Sidebar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
