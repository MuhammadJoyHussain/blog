const express = require("express");
const router = express.Router();

const { createBlog, getBlogs, getBlog } = require("../controllers/blog");
const { protect, authorize } = require("../middlewares/auth");

router.route("/").post(protect, createBlog).get(protect, getBlogs);

router.route("/:id").get(protect, getBlog);

module.exports = router;
