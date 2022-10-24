import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Box,
  CssBaseline,
  Paper,
  Divider,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getOne } from "../state/products";
import CommentIcon from "@mui/icons-material/Comment";
import { useForm } from "react-hook-form";
const Comment = () => {
  const [open, setOpen] = useState();
  const [commentReview, setCommentReview] = useState("");
  const user = useSelector((state) => state.user);
  const { _id } = useSelector((state) => state.oneProduct);
  const dispatch = useDispatch();
  const [review, setReview] = useState([]);

  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { setCommentReview: "" } });

  const onSubmit = (data) => {
    axios
      .post(`/api/products/review/${user._id}`, {
        _id: _id,
        commentReview: data.setCommentReview,
      })
      .then((res) => dispatch(getOne(res.data)));
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        setCommentReview: "",
      });
    }
  }, [formState, reset]);

  const handleComments = () => {
    setOpen(!open);

    axios
      .get(`/api/products/showReviews/${_id}`)
      .then((res) => setReview(res.data.reviews));
  };

  return (
    <CssBaseline>
      <Box margin="0 auto">
        <Paper>
          <Box
            width={{
              xl: "100vh",
              lg: "100vh",
              md: "100vh",
              sm: "50vh",
              xs: "50vh",
            }}
            sx={{
              marginBottom: "100px",
              backgroundColor: "#fcfcfc",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              marginTop: "15px",
              maxWidth: "100vh",
              minWidth: "40vh",
              margin: "0 auto",
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              id="message"
              label="Contale a otras personas sobre tu producto"
              name="review"
              sx={{ color: "white" }}
              {...register("setCommentReview")}
            />

            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              color="primary"
              sx={{
                mt: "auto",
                backgroundColor: "#8d69d4",
                "&:hover": {
                  backgroundColor: "#633fa4",
                },
              }}
            >
              Enviar
            </Button>
            <Divider />
            <List
              sx={{
                p: 5,

                position: "relative",
                margin: "0 auto",
                width: "100%",
                maxWidth: 500,
                fontSize: "150px",
                bgcolor: "background.paper",
              }}
            >
              <ListItemButton onClick={handleComments}>
                <ListItemIcon>
                  <CommentIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  sx={{ margin: "0 auto" }}
                  primary="Comentarios:"
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {review.map((e) => {
                    return (
                      <ListItemButton sx={{ pl: 6 }}>
                        <ListItemIcon>
                          <AccountCircleIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          sx={{ fontSize: 14 }}
                          primary={e.username}
                          secondary={e.commentReview}
                        />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </Box>
        </Paper>
      </Box>
    </CssBaseline>
  );
};

export default Comment;
