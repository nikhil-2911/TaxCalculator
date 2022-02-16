import express from "express";
const router = express.Router();

import {
  userSignup,
  userLogin,
  userDetails,
} from "../controller/userAuthentication.js";

router.post("/register", userSignup);
router.post("/login", userLogin);
router.post("/userDetails", userDetails);

export default router;
