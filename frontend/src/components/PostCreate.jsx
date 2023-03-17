import { Box, Button, Container, Input, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useStorage } from "../hooks";
import { useInput } from "../hooks/useInput";
import axios from "axios";
import { UserContext } from "../contexts/UserInfoContext";
import { ColorModeContext } from "../contexts";
import Cookies from "js-cookie";

const PostCreate = () => {
  const { owner } = useContext(UserContext);
  const { color } = useContext(ColorModeContext);
  const [title, titleBind] = useInput("");
  const [text, textBind] = useInput("");
  const [file, setFile] = useState(null);
  const [created, setCreated] = useState(false);
  const { handleUpload, loading, setLoading } = useStorage();
  const [imageURL, setImageURL] = useState(null);
  const handle = async () => {
    const res = await handleUpload(file);
    setImageURL(res);
  };
  const create = async () => {
    const owner = Cookies.get("owner");
    if (!title || !text || !imageURL) return;
    try {
      const res = await axios.post("http://localhost:8010/posts/createPost", {
        title: title,
        text: text,
        image: imageURL,
        owner: owner,
      });
      if (res.data) setCreated(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      {!created ? (
        <Container
          maxWidth="xl"
          sx={{
            pt: 14,
            pb: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
            backgroundColor: color === "dark" ? "white" : "black",
            color: color === "dark" ? "black" : "white",
            height: "90vh",
          }}
          onClick={() => {}}
        >
          <Box>
            <Typography variant="h5">Write a title for your post</Typography>
            <Input placeholder="title" {...titleBind} />
            <Typography variant="h5">Write text for your post</Typography>
            <Input placeholder="text" {...textBind} />
          </Box>
          <Typography variant="h5">Upload a picture for your post</Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Input type={"file"} onChange={(e) => setFile(e.target.files[0])} />
            <Button onClick={() => handle()}>Upload</Button>
            <img src={imageURL} width="100px" height="100px" alt="" />
          </Box>
          <Button
            sx={{
              width: "",
              background: "#DFE2E8",
              color: "#6D7D8B",
              padding: "10px 50px",
            }}
            onClick={() => create()}
          >
            Post
          </Button>
        </Container>
      ) : (
        <Box height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}><Typography variant="h1">Post created</Typography></Box>
      )}
    </Box>
  );
};

export default PostCreate;
