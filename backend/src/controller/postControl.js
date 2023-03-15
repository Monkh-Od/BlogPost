const Post = require("../model/posts");

exports.getPosts = async (req, res) => {
  if (!req.body.owner) return res.status(404).json({ message: "No owner" });
  const response = await Post.find().populate({
    path: "owner",
    select: "-password",
  });
  return res.status(200).json({ response });
};

exports.getPostById = async (req, res) => {
  const postId = req.params.postId;
  if (!postId || postId.length != 24) {
    res.status(404).json({ message: "noPostFound" });
    return;
  }
  const response = await Post.findById(postId).populate({
    path: "owner",
    select: "-password",
  });
  if (!response || response?.length === 0) {
    res.status(404).json({ message: "noPostFound" });
    return;
  }
  return res.status(200).json({ post: response });
};

exports.getAllPosts = async (req, res) => {
  try {
    const { limit, page } = Number(req.params);
    const posts = await Post.find({})
      .limit(limit)
      .skip(limit * (page - 1))
      .exec();
    res.status(200).send(posts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

exports.createPost = async (req, res) => {
  if (!req.body.owner || !req.body.text)
    return res.status(404).json({ message: "No text provided" });
  try {
    const { title, text, date, image, owner } = req.body;
    if (image) {
      const post = await Post.create(req.body);
      res.status(200).send(post);
    } else {
      const post = await Post.create({ title, text, date, owner });
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
