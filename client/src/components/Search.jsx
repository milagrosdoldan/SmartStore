import {
  alpha,
  Box,
  FormControl,
  IconButton,
  InputBase,
  styled,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProduct } from "../state/products";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Buscador = styled("div")(({ theme }) => ({
  marginInline: "auto",
  color: "white",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  gap: "20px",
  padding: "2px 10px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
  },
}));

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { name: "" } });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
      });
    }
  }, [formState, reset]);

  const onSubmit = (data) => {
    dispatch(searchProduct(data.name)).then(() => navigate("/search"));
  };

  return (
    <Buscador display="flex" flexDirection="row">
      <FormControl>
        <InputBase
          sx={{ color: "white", paddingTop: "3px" }}
          {...register("name")}
          placeholder="Search..."
        ></InputBase>
      </FormControl>
      <Box
        sx={{
          color: "white",
          display: "flex",
          gap: "20px",
          variant: "outlined",
          alignItems: "center",
        }}
      >
        <IconButton onClick={handleSubmit(onSubmit)}>
          <SearchIcon sx={{ color: "white", "&:hover": { color: "gray" } }} />
        </IconButton>
      </Box>
    </Buscador>
  );
};

export default Search;
