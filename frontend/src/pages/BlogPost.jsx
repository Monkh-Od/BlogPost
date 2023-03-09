import axios from "axios";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const BlogPost = () => {
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:8010/posts/allposts/9/${page}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  const next = (
    <Box display={"flex"}>
      <Typography>Next</Typography>
      <ChevronRightIcon />
    </Box>
  );

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 15,
        mb: 15,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontBold: "900" }}>
          <b>Blog posts</b>
        </Typography>
        <Typography>
          Our latest updates and blogs about managing your team
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {/* {posts.map((post, i) => (
          <Grid item xs={6} xl={3} lg={4} md={4} sm={6}>
            <Blogs
              text={post.text}
              title={post.title}
              image={post.image}
              owner={post.owner}
              avatarImage={post.avatarImage}
            />
          </Grid>
        ))} */}
      </Grid>
      <Box display={"flex"} justifyContent={"center"} gap={5}>
        <Button
          sx={{
            padding: "10px 100px",
            width: "",
            background: "#DFE2E8",
            color: "#6D7D8B",
          }}
          onClick={() => setPage(page + 1)}
        >
          {next}
        </Button>
        <Button sx={{ background: "#DFE2E8", color: "#6D7D8B", padding: "10px 50px" }} onClick={()=> navigate("/postcreate")}>
          Add post
        </Button>
      </Box>
    </Container>
  );
};

export default BlogPost;