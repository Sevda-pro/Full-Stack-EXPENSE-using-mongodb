const { loginpage,signup, login } = require("../controller/user");
const express = require("express");
const router = express.Router();
const { authentication } = require("../middlewares/auth");

router.route("/").get(loginpage)
router.route("/signup").post(signup);
router.route("/login").post(login);


module.exports = router;
