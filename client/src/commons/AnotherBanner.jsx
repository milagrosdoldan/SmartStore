import { Box, Typography } from "@mui/material";
import React from "react";
import { SiLogitech } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { SiAcer } from "react-icons/si";
import { SiAsus } from "react-icons/si";
import { SiDell } from "react-icons/si";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { SiLenovo } from "react-icons/si";
import { SiToshiba } from "react-icons/si";
import { SiHitachi } from "react-icons/si";
import { SiJbl } from "react-icons/si";

const AnotherBanner = () => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          marginTop: "40px",
          height: "12vh",
          marginRight: "7px",
          fontSize: "30px",
          backgroundColor: "#e1e1e1",
        }}
      >
        <Box
          justifyContent="space-between"
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ margin: "0 auto", width: "80%", position: "relative" }}
        >
          <AutoPlaySwipeableViews enableMouseEvents>
            <Box
              justifyContent="space-between"
              display="flex"
              flexDirection="row"
              gap="30px"
              alignItems="center"
            >
              <SiLogitech color="white" size="80px" />
              <SiToshiba color="white" size="110px" />

              <SiJbl color="white" size="80px" />

              <SiHitachi color="white" size="100px" />
            </Box>
            <Box
              justifyContent="space-between"
              display="flex"
              flexDirection="row"
              gap="30px"
              alignItems="center"
            >
              <SiLenovo color="white" size="110px" />
              <SiAcer color="white" size="110px" />
              <SiAsus color="white" size="110px" />
              <SiToshiba color="white" size="110px" />
            </Box>
          </AutoPlaySwipeableViews>
        </Box>
      </Box>
    </>
  );
};

export default AnotherBanner;
