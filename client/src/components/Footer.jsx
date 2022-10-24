import { Typography, Container, Box, CssBaseline, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import SmartToyIcon from "@mui/icons-material/SmartToy";
function Copyright() {
  return (
    <Typography sx={{ color: "white" }} textAlign="center" variant="body2">
      {"Copyright © "}
      SmartStore {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function Footer() {
  return (
    <Box height="10vh" px={{ xs: 3 }} py={{ xs: 5 }} bgcolor="black">
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Copyright />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
