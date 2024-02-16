import express from "express";
import {
  changePassword,
  getMyProfile,
  login,
  logout,
  register,
  updateProfile,
  updateProfilePicture,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/changePassword").put(isAuthenticated, changePassword);
router.route("/updateProfile").put(isAuthenticated, updateProfile);
router
  .route("/updateProfilePicture")
  .put(isAuthenticated, updateProfilePicture);

export default router;
