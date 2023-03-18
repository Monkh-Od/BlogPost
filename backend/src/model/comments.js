const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const CommentSchema = new Schema({
  date: { type: String, default: moment().format("MMMM Do YYYY") },
  image: { type: String },
  username: { type: String},
  postId: {
    type: Schema.ObjectId,
    ref: "posts",
    required:true,
  },
  text: { type: String, required: true },
});

const Comment = mongoose.model("comments", CommentSchema);

module.exports = Comment;
