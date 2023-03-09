const express = require("express");
const { getPosts, createPost, deletePost, updatePost, getAllPosts } = require("../controller/postControl");

const postRouter = express.Router();

postRouter
.get("/getposts/:user", getPosts)
.get("/allposts/:limit/:page", getAllPosts)
.post("/createPost", createPost)
.delete("/deletePost/:id", deletePost)
.put("/updatePost/:id", updatePost)

module.exports = postRouter;
    