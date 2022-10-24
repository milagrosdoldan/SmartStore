import { Grid } from "@mui/material";
import React from "react";

const ImageGrid = ({ images, onSelect, selectedImage }) => {
  return (
    <Grid
      container
     marginRight={{xl:"40px", lg:"40px"}}
      direction={{
        xl: "column",
        lg: "column",
        md: "column",
        sm: "row",
        xs: "row",
      }}
    >
      {images.map((image, i) => (
        <img
          src={image}
          height={80}
          onClick={() => onSelect(i)}
          style={{
            border: i === selectedImage ? "solid 1px black" : "solid 1px #eee",
            cursor: "pointer",
          }}
        />
      ))}
    </Grid>
  );
};

export default ImageGrid;
