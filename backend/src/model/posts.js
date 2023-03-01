const mongoose = require("mongoose");
const isURL = require("validator/lib/isURL");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
      date: {type: String, default: new Date()},
      title: {type: String, required: true },
      image: {type: String, validate : [isURL, "please upload an image"]},
      text: {type: String, required: true}
});

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
