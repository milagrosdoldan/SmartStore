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
import { useDispatch } from "react-redux";
import { signUp } from "../state/login";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const StyledIcon = styled(SmartToyIcon)(({ theme }) => ({
  color: "#633fA4",
  fontSize: "32px",
}));

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    dispatch(signUp(data)).then(() => navigate("/"));
  };

  return (
    <Grid
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
      <Grid
        sm={{ m: "none" }}
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
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="username"
                    label="Username"
                    name="username"
                    type="username"
                    {...register("username", { required: true })}
                  />
                  {errors.username?.type === "required" &&
                    "Username is required."}
                </Grid>

                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    {...register("password", { required: true, minLength: 10 })}
                  />
                  {errors.password?.type === "required" &&
                    "Password is required."}
                  {errors.password?.type === "minLength" &&
                    "Minumun 10 characters."}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="direccion"
                    label="State"
                    name="provincia"
                    {...register("provincia", { required: true })}
                  />
                  {errors.provincia?.type === "required" &&
                    "State is required."}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="direccion"
                    label="Direction"
                    name="direccion"
                    {...register("direccion", { required: true })}
                  />
                  {errors.direccion?.type === "required" &&
                    "Direction is required"}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="phone"
                    label="Phone"
                    name="phone"
                    {...register("tel", { required: true })}
                  />
                  {errors.tel?.type === "required" && "Direction is required"}
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
                onClick={handleSubmit(handleRegister)}
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

/* <Grid item xs={12} sm={6}>
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
                </Grid>*/
export default Signup;
