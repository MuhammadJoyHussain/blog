const express = require("express");
const { upload } = require("../controllers/upload");
const router = express.Router();

const { protect, authorize } = require("../middlewares/auth");

router.route("/").get(protect, upload);

module.exports = router;