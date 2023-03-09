import { Box, Button, Container, Input, Typography } from "@mui/material";
import { useState } from "react";
import { useStorage } from "../hooks";
import { useInput } from "../hooks/useInput";
import axios from "axios";

const PostCreate = () => {
  const [title, titleBind] = useInput("");
  const [text, textBind] = useInput("");
  const [file, setFile] = useState(null);
  const { handleUpload, loading, setLoading } = useStorage();
  const [imageURL, setImageURL] = useState(null);
  const handle = async () => {
    const res = await handleUpload(file);
    setImageURL(res);
  };
  const create = async () => {
    if (!title || !text || !imageURL) return;
    try {
      const res = await axios.post("http://localhost:8010/posts/createPost", {
        title: title,
        text: text,
        image: imageURL,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: 14,
        pb: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Box>
        <Typography variant="h5" {...titleBind}>
          Write a title for your post
        </Typography>
        <Input placeholder="title" />
        <Typography variant="h5" {...textBind}>
          Write text for your post
        </Typography>
        <Input placeholder="text" />
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
  );
};

export default PostCreate;
