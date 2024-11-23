const express = require("express");
const getAllUser = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.route("/").get(getAllUser);

module.exports = userRouter;
