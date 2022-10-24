import { Button } from "@mui/material";
import React from "react";

const BuyBottom = () => {
  return (
    <Button
      variant="contained"
      sx={{
        width: "30vh",
        backgroundColor: "#8d69d4",
        "&:hover": {
          backgroundColor: "#633fa4",
        },
      }}
    >
      Buy NOW!
    </Button>
  );
};

export default BuyBottom;
