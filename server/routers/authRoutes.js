const express = require("express");
const router = express.Router();
const { signup, login, loginUname } = require("../controllers/authController");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/loginUname").post(loginUname);

module.exports = router;
