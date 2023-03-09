const express = require("express");
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  getUser,
} = require("../controllers/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", getMe);
router.get("/user", getUser);
// router.post("/forgotpassword", forgotPassword);
// router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;
