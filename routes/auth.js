const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controllers/auth");
const { protect, authorize } = require("../middlewares/auth");

router.route("/").post(registerUser).get(protect, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, deleteUser)
  .get(protect, getUserById)
  .put(protect, updateUser);

module.exports = router;
