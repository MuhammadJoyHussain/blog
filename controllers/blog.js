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
  const user = await User.find(req.user._id);
  console.log(user);
  const blogs = await Blog.find(user).cache({ key: req.user._id });

  res.status(200).json({
    status: true,
    data: blogs,
  });
};

exports.getBlog = async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  res.status(200).json({
    status: true,
    data: blog,
  });
};
