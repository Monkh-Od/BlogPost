const Comment = require("../model/comments");

exports.createComment = async (req, res) => {
  const comment = req.body;
  try {
    const result = await Comment.create(comment);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send(error);
  }
};
exports.deleteComment = async (req, res) => {
  const _id = req.params.id;
  try {
    const comment = await Comment.findByIdAndDelete({ _id });
    res.status(200).send(comment);
  } catch (error) {
    res.status(404).send(error);
  }
};
exports.getCommentByPost = async (req, res) => {
  const postId = req.params.id;
  try {
    const response = await Comment.find({ postId })
      .populate({
        path: "postId",
        select: "-title",
      })
      .exec();
    res.status(200).send({ res: response });
  } catch (error) {
    res.status(404).send(error);
  }
};
exports.updateComment = async (req, res) => {
  const _id = req.params. id;
  const body = req.body;
  try {
    const comment = await Comment.findByIdAndUpdate({ _id }, { ...body });
    res.status(200).send(comment);
  } catch (error) {
    res.status(404).send(error);
  }
};
