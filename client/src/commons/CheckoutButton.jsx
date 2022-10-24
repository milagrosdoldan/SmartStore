import { Button } from "@mui/material";
import React from "react";

const CheckoutButton = () => {
  return (
    <Button
      sx={{
        color: "white",
        m: "0 auto",
        backgroundColor: "#8d69d4",
        "&:hover": {
          backgroundColor: "#633fa4",
        },
      }}
    >
      Checkout
    </Button>
  );
};

export default CheckoutButton;
