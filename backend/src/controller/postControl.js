const Post = require("../model/posts");

exports.getPosts = async (req, res) => {
  const user = req.params.user
  try {
    const posts = await Post.find({
      email: user
    })
    res.status(200).send(posts);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, text, date, image } = req.body;
    if (image) {
      const post = await Post.create(req.body);
      res.status(200).send(post);
    } else {
      const post = await Post.create({ title, text, date });
      res.status(200).send(post);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
exports.deletePost = async (req, res) => {
  const _id = req.params.id;
  try {
    const post = await Post.findByIdAndDelete({ _id });
    res.status(200).send(post);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.updatePost = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const post = await Post.findByIdAndUpdate({ _id }, { ...body });
    res.status(200).send(post);
  } catch (error) {
    res.status(404).send(error);
  }
};
