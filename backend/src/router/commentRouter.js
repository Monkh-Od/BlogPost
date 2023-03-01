const express = require("express");
const { getComment, createComment, deleteComment, updateComment } = require("../controller/commentControl");

const commentRouter = express.Router();

commentRouter
  .get("/:id", getComment)
  .post("/createComment", createComment)
  .put("/updateComment/:id", updateComment)
  .delete("/deleteComment/:id", deleteComment)

module.exports = commentRouter;
