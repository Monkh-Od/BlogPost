const express = require("express");
const {  createComment, deleteComment, updateComment, getCommentByPost } = require("../controller/commentControl");

const commentRouter = express.Router();

commentRouter
  .get("/:id", getCommentByPost)
  .post("/createComment", createComment)
  .put("/updateComment/:id", updateComment)
  .delete("/deleteComment/:id", deleteComment)

module.exports = commentRouter;
