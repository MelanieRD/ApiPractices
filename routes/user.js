const { getAllUser, getUserById } = require("../controllers/userController.js");

const express = require("express");
const userRouter = express.Router();

userRouter
  .route("/")
  .get(getAllUser)
  .post((req, res) => {
    res.send("Post Done");
  })
  .put((req, res) => {
    res.send("Put Done");
  });

module.exports = userRouter;
