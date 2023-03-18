import { Avatar, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ColorModeContext } from "../contexts/themeContext";
import { useNavigate, useParams } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useInput } from "../hooks/useInput";
import { AuthContext } from "../contexts/AuthContext";
import { Comments } from "../components/Comments";

export const Post = () => {
  const [comment, CommentBind] = useInput("");
  const [allComments, setAllComments] = useState(null);
  const { currentuser } = useContext(AuthContext);
  const { color } = useContext(ColorModeContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8010/posts/getpost/${postId}`
        );
        setPost(res.data.post);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8010/comments/${postId}`
        );
        setAllComments(data.res);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const deletePost = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8010/posts/deletePost/${postId}`
      );
      if (res) navigate("/blogposts");
    } catch (error) {
      console.log(error);
    }
  };
  const createComment = async () => {
    try {
      await axios.post("http://localhost:8010/comments/createComment", {
        username: currentuser,
        postId: postId,
        text: comment,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!post)
    <Container
      maxWidth="md"
      sx={{
        paddingTop: "9vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 4,
      }}
    >
      <Typography>No Post was found</Typography>
    </Container>;

  return (
    <Box backgroundColor={color === "dark" ? "white" : "black"}>
      <Container
        maxWidth="md"
        sx={{
          paddingTop: "9vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 4,
          gap: 10,
        }}
      >
        <Box sx={styles.titlepos}>
          <Typography
            sx={styles.word}
            color={color === "dark" ? "black" : "white"}
          >
            {post?.title}
          </Typography>
          <Box sx={styles.posit}>
            <Avatar src="/static/images/avatar/1.jpg" />
            <Typography sx={{ color: color === "dark" ? "black" : "white" }}>
              {post?.owner.email}
            </Typography>
            <Typography sx={{ color: color === "dark" ? "black" : "white" }}>
              I
            </Typography>
            <Typography sx={{ color: color === "dark" ? "black" : "white" }}>
              {post?.date}
            </Typography>
          </Box>
        </Box>
        <img src={post?.image} alt="" style={styles.img} />
        <Box sx={styles.position}>
          <Typography
            sx={styles.words}
            color={color === "dark" ? "black" : "white"}
          >
            {post?.text}
          </Typography>
          <Box sx={styles.writtnby}>
            <Avatar sx={{ width: "56px", height: "56px" }} />
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: color === "dark" ? "black" : "white",
                }}
              >
                Written by
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: color === "dark" ? "black" : "white",
                }}
              >
                {post?.owner.email}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.commpos}>
          <Avatar />
          <Box>
            <Typography sx={{ color: color === "dark" ? "black" : "white" }}>
              {post?.owner.email}
            </Typography>
            <Typography sx={{ color: color === "dark" ? "black" : "white" }}>
              CEO Team App
            </Typography>
          </Box>
        </Box>
        <Grid container sx={{display:"flex", flexDirection:"column", gap: 5}}>
          {allComments?.map((comments, i) => (
            <Grid item xs={12} md={12} xl={6}>
              <Comments comment={comments}/>
            </Grid>
          ))}
        </Grid>
        <Box sx={styles.comm}>
          <Typography sx={{ color: color === "dark" ? "black" : "white" }}>
            Join the conversation
          </Typography>
          <Box display={"flex"}>
            <Avatar />
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="30"
              style={{ color: color === "dark" ? "black" : "white" }}
              {...CommentBind}
              onKeyDown={(e) => e.code === "Enter" && createComment()}
            ></textarea>
          </Box>
        </Box>
        <Box
          sx={{ cursor: "pointer", display: "flex", gap: 2 }}
          onClick={() => deletePost()}
        >
          <Typography>Delete Post</Typography>
          <DeleteForeverIcon sx={{ color: "red" }} />
        </Box>
        <Box sx={{ cursor: "pointer", display: "flex", gap: 2 }}>
          <Typography>Edit post</Typography>
          <EditIcon />
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  position: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titlepos: {
    display: "flex",
    height: { xl: "20vh", xs: "30vh" },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  word: {
    fontFamily: "Mukta",
    fontSize: "4vh",
    lineHeight: "6vh",
  },
  posit: {
    display: "flex",
    gap: 2,
    alignItems: "center",
  },
  words: {
    width: "80%",
    fontSize: "2vh",
    fontFamily: "Mulish",
  },
  img: {
    width: "100%",
    height: {
      xl: "auto",
      xs: "40vh",
    },
  },
  comm: {
    display: "flex",
    flexDirection: "column",
  },
  commpos: {
    display: "flex",
    height: "5vh",
  },
  writtnby: {
    height: "10vh",
    width: {
      xl: "50vh",
      xs: "70%",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Mulish",
  },
};
