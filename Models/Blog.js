const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please give a title"],
  },
  blog: {
    type: String,
    required: [true, "Please write some blog"],
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
