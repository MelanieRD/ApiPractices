// importando express
const express = require("express");
const app = express();
const PORT = 3000;

//rutas
const routes = require("./routes"); //importamos nuestro archivo de rutas
app.use("/api", routes);
//localhost:3000/api

app.listen(PORT, () => {
  console.log("Listing port at: " + PORT);
});
