const express = require("express");
const {
  getPosts,
  createPost,
  deletePost,
  updatePost,
  getAllPosts,
  getPostById,
} = require("../controller/postControl");
// const { authenticateToken } = require("../middleware/verifying");

const postRouter = express.Router();

postRouter
  .get("/getposts/:user", getPosts)
  .get("/getpost/:postId", getPostById)
  .get("/allposts/:limit/:page", getAllPosts)
  .post("/createPost", createPost)
  .delete("/deletePost/:id", deletePost)
  .put("/updatePost/:id", updatePost);

module.exports = postRouter;
