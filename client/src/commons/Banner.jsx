import { Box, Typography, styled } from "@mui/material";
import React from "react";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const StyledBox = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    gap: "15px",
    paddingTop: "15px",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    height: "12vh",
    backgroundColor: "black",
    justifyContent: "center",
    gap: "20px",
  },
}));

const Banner = () => {
  return (
    <StyledBox>
      <Box display="flex" flexDirection="row" alignItems="center">
        <SportsEsportsIcon
          sx={{ marginRight: "7px", fontSize: "30px", color: "#8d69d4" }}
        />
        <Typography sx={{ lineHeight: 1, color: "white" }}>
          FIND THE PRODUCTS YOU ARE LOOKING FOR
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <LocalShippingIcon
          sx={{ marginRight: "7px", fontSize: "30px", color: "#8d69d4" }}
        />
        <Typography sx={{ lineHeight: 1, color: "white" }}>
          WE MAKE FREE SHIPPING TO THE WHOLE COUNTRY
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <CreditScoreIcon
          sx={{
            marginRight: "7px",
            fontSize: "30px",
            fontSize: "30px",
            color: "#8d69d4",
          }}
        />
        <Typography sx={{ lineHeight: 1, color: "white" }}>
          PAY WITH CREDIT OR DEBIT CARD
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography></Typography>
      </Box>
    </StyledBox>
  );
};

export default Banner;
