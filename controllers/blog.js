const Blog = require("../Models/Blog");
const User = require("../Models/User");

exports.createBlog = async (req, res, next) => {
  const { title, blog } = req.body;

  const createBlog = new Blog({
    title,
    blog,
    _user: req.user.id,
  });

  try {
    await createBlog.save();
    res.send(createBlog);
  } catch (err) {
    res.send(400, err);
  }
};

exports.getBlogs = async (req, res, next) => {
  const blogs = await Blog.find({ _user: req.user.id }).cache({
    key: req.user.id,
  });

  res.send({ data: blogs });
};

exports.getBlog = async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  res.status(200).json({
    status: true,
    data: blog,
  });
};
