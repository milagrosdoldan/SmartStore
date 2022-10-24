import {
  Box,
  Button,
  CardMedia,
  Grid,
  Rating,
  Typography,
  styled,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import React from "react";
import "animate.css";
import { fakeList } from "./fakelist";
import BuyBottom from "../commons/BuyBottom";

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: "30px",
  transition: "all .25s ease-out",
  "&:hover": {
    color: "grey",
    transform: "rotate(-1deg)",
  },
}));

const Header = () => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  return (
    <Grid
      container
      sx={{
        height: "60vh",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "150px",
      }}
    >
      <Grid
        item
        flexGrow={1}
        sx={{ width: "80vh", justifyContent: "center" }}
        xs={8}
      >
        <AutoPlaySwipeableViews enableMouseEvents>
          {fakeList.map((e) => {
            return (
              <>
                <Box display="flex" flexDirection="row">
                  <Box
                    width="50%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Rating
                      sx={{ marginLeft: "40px", marginInlineEnd: "auto" }}
                      name="read-only"
                      value={4}
                      readOnly
                    />
                    <StyledTypography
                      sx={{
                        marginLeft: "40px",
                        marginInlineEnd: "auto",
                        fontWeight: "800",
                      }}
                      variant="h3"
                    >
                      {e.marca}
                    </StyledTypography>
                    <StyledTypography
                      sx={{ marginLeft: "40px", marginInlineEnd: "auto" }}
                      variant="h3"
                    >
                      {e.name}
                    </StyledTypography>
                    <Box
                      sx={{
                        marginTop: "15px",
                        marginLeft: "40px",
                        marginInlineEnd: "auto",
                      }}
                    >
                      <BuyBottom />
                    </Box>
                  </Box>
                  <Box width="50%">
                    <CardMedia
                      className="animate__animated animate__fadeInDown "
                      component="img"
                      image={e.image}
                      alt="green iguana"
                      sx={{
                        width: "80%",
                        borderRadius: "15px",
                      }}
                    />
                  </Box>
                </Box>
              </>
            );
          })}
        </AutoPlaySwipeableViews>
      </Grid>
    </Grid>
  );
};

export default Header;
