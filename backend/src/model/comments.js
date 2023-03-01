const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  date: { type: String, default: new Date() },
  image: { type: String },
  username: { type: String },
  text: { type: String, required: true },
});

const Comment = mongoose.model("comments", CommentSchema);

module.exports = Comment;
