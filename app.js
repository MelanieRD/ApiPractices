const express = require("express");
const app = express();
const PORT = 3000;

require("dotenv").config;
//mongo
const MongoClient = require("mongodb");
const url = process.env.MONGO_URL;

const router = require("./routes");
app.use("/app", router);

app.listen(PORT, () => {
  console.log("listening Server");
});
