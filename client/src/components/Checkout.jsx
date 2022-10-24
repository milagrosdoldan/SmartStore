import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { checkOut, sendMe } from "../state/login";
import "../style/spinner.css";

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const { _id } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(_id, "id");
  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(activeStep + 1);
      setTimeout(() => {
        dispatch(checkOut(_id))
          .then(() => navigate("/"))
          .then(() => {
            dispatch(sendMe());
          });
      }, 2000);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: "50px" }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5, color: "secondary" }}
          >
            {steps.map((label) => (
              <Step className="pasos" key={label}>
                <StepLabel sx={{ color: "secondary" }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      sx={{ mt: 3, ml: 1, color: "black" }}
                    >
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      mt: 3,
                      ml: 1,
                      color: "white",

                      backgroundColor: "#8d69d4",
                      "&:hover": {
                        backgroundColor: "#633fa4",
                      },
                    }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

/*const [activeStep, setActiveStep] = React.useState(0);

const handleNext = () => {
  setActiveStep(activeStep + 1);
};

const handleBack = () => {
  setActiveStep(activeStep - 1);
};

<ThemeProvider theme={theme}>
{/* <CssBaseline /> 
<Container
  component="main"
  maxWidth="sm"
  sx={{ mb: 4, marginTop: "10vh" }}
>
  <Paper
    variant="outlined"
    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
  >
    <Typography component="h1" variant="h4" align="center">
      Checkout
    </Typography>
    <Review />
  </Paper>
</Container>
</ThemeProvider>
*/
export default Checkout;
