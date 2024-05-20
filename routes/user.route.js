const { loginUser, registerUser } = require("../controllers/user.controller");
const { validateToken } = require("../middleware/validateToken");

const express = require("express");
const routes = express.Router();

routes.route("/login").post(loginUser);
routes.route("/register").post(registerUser);

module.exports = routes;
