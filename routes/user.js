const express = require("express");
const {
  signupUser,
  signinUser,
  getUser
} = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.get("/", requireAuth, getUser);

router.post("/signin", signinUser);

router.post("/signup", signupUser);

module.exports = router;
