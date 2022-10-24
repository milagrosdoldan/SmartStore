import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Typography,
  Box,
  Container,
  Grid,
  CssBaseline,
  styled,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../state/login";
import { Link } from "react-router-dom";
const StyledIcon = styled(SmartToyIcon)(({ theme }) => ({
  color: "#633fA4",
  fontSize: "32px",
}));

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    dispatch(logIn(data)).then(() => navigate("/"));
  };

  return (
    <CssBaseline>
      <Box
        sx={{
          paddingTop: "50px",
          minHeight: "100vh",
          backgroundColor: "#212223",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fcfcfc",
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            m: 10,
            p: 5,
          }}
        >
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <StyledIcon
                className="animate__animated animate__bounceInDown animate__fast"
                sw={{ color: "#633fA4" }}
              />
              <Typography component="h1" variant="h5">
                Log In
              </Typography>
              <Box
                component="form"
                // onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="email"
                      label="Email"
                      name="email"
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        },
                      })}
                    />
                    {errors.email?.type === "pattern" && "Invalid Email."}
                    {errors.email?.type === "required" && "Email is required."}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 10,
                      })}
                    />
                    {errors.password?.type === "required" &&
                      "Password is required."}
                    {errors.password?.type === "minLength" &&
                      "Minumun 10 characters."}
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#8d69d4",
                    "&:hover": {
                      backgroundColor: "#633fa4",
                    },
                  }}
                  onClick={handleSubmit(handleLogin)}
                  type="submit"
                  fullWidth
                >
                  Sign Up
                </Button>
              </Box>
              <Box>
                <Typography>
                  {" "}
                  Need an account? You can register{" "}
                  <Link
                    to="/signup"
                    style={{ color: "#2759be", textDecoration: "underline" }}
                  >
                    {" "}
                    here!
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </CssBaseline>
  );
};

export default Login;
