const express = require("express");
const router = express.Router();

const { createBlog, getBlogs, getBlog } = require("../controllers/blog");

router.route("/").post(createBlog).get(getBlogs);

router.route("/:id").get(getBlog);

module.exports = router;
