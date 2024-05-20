const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const userModel = require("../models/user.model");
const secret = process.env.SECRET;

// @request POST
// @authentication notrequired
// @api /login
// @desc post request for login
const loginUser = (req, res) => {
  jwt.sign(req.body, secret, (err, token) => {
    if (err) {
      res.status(401);
      throw new Error("Invalid user credentials");
    }
    res.status(200).json({ message: "login successful", token });
  });
};

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.username || !req.body.password) {
    res.status(404);
    throw new Error("Username and Password required");
  }

  const user = await userModel.create({
    username: "user1",
    password: "pass1",
  });
  res.status(200).json({message: "user registered successfully", user});
});

module.exports = { loginUser, registerUser };
