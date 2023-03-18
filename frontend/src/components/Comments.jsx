import { Box, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/themeContext";
import axios from "axios";

export const Comments = ({ comment }) => {
  const { color } = useContext(ColorModeContext);
  const deleteComment = async () => {
    try {
      await axios.delete(
        `http://localhost:8010/comments/deleteComment/${comment._id}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: color === "dark" ? "black" : "white",
      }}
    >
      <Typography>{comment.username}</Typography>
      <Typography>{comment.text}</Typography>
      <Typography>{comment.date}</Typography>
      <Box
        sx={{ cursor: "pointer", display: "flex" }}
        onClick={() => deleteComment()}
      >
        <Typography>Delete Comment</Typography>
        <ClearIcon sx={{ color: "red" }} />
      </Box>
    </Box>
  );
};
