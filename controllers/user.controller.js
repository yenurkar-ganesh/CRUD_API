const asyncHandler = require("express-async-handler");

// Register a User
// ROUTE POST api/user/register
const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Register the user` });
});

// login a User
// ROUTE POST api/user/login
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `LoginUser` });
});

// current user info
// ROUTE POST api/user/current
//access : privet
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
