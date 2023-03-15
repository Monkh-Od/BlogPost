import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Img from "../assets/images/Rectangle.png";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/themeContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Post = () => {
  const { color } = useContext(ColorModeContext);
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { postId } = useParams();
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8010/posts/getpost/${postId}`
        );
        console.log(res.data.post);
        setPost(res.data.post);
      } catch (error) {
        console.log(error);
        console.log("no post");
        navigate("/");
      }
    };
    getPost();
  }, []);
  console.log(post);
  if (!post) {
    <Container
      maxWidth="md"
      sx={{
        marginTop: "9vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Typography>No Post was found</Typography>
    </Container>;
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "9vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Box sx={styles.titlepos}>
        <Typography sx={styles.word}>{post?.title}</Typography>
        <Box sx={styles.posit}>
          <Avatar src="/static/images/avatar/1.jpg" />
          <Typography>{post?.owner.email}</Typography>
          <Typography>I</Typography>
          <Typography>{post?.date}</Typography>
        </Box>
      </Box>
      <img src={post?.image} alt="" style={styles.img} />
      <Box sx={styles.position}>
        <Typography sx={styles.words}>{post?.text}</Typography>
        <Typography sx={styles.words}>{post?.text}</Typography>
        <Box sx={styles.writtnby}>
          <Avatar sx={{ width: "56px", height: "56px" }} />
          <Box>
            <Typography sx={{ fontSize: "14px" }}>Written by</Typography>
            <Typography sx={{ fontSize: "20px" }}>
              {post?.owner.email}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.commpos}>
        <Avatar />
        <Box>
          <Typography>Mikuun</Typography>
          <Typography>Me bur aimr huurhuuunnn</Typography>
        </Box>
      </Box>
      <Box sx={styles.comm}>
        <Typography>Join the conversation</Typography>
        <Box display={"flex"}>
          <Avatar />
          <textarea id="w3review" name="w3review" rows="4" cols="30"></textarea>
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  position: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: {
      xl: "90vh",
    },
  },
  titlepos: {
    display: "flex",
    height: { xl: "20vh", xs: "30vh" },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  word: {
    width: {
      xl: "50vh",
    },
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

export default Post;
