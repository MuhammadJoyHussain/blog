const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: String,
  blog: String,
  createdAt: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Blog", BlogSchema);
