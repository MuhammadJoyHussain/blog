const Blog = require("../Models/Blog");
const User = require("../Models/User");

exports.createBlog = async (req, res, next) => {
  const blog = await Blog.create(req.body);

  res.status(200).json({
    success: true,
    data: blog,
  });
};

exports.getBlogs = async (req, res, next) => {
  const blog = await Blog.find();

  res.status(200).json({
    status: true,
    data: blog,
  });
};

exports.getBlog = async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  res.status(200).json({
    status: true,
    data: blog,
  });
};
