const mongoose = require("mongoose");
const isURL = require("validator/lib/isURL");
const Schema = mongoose.Schema;
const moment = require("moment")

const PostSchema = new Schema({
  date: { type: String, default: moment().format("MMMM Do YYYY") },
  title: { type: String, required: true },
  image: { type: String, validate: [isURL, "please upload an image"] },
  text: { type: String, required: true },
  owner: {
    type: Schema.ObjectId,
    ref: "users",
    required: true,
  },
});

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
