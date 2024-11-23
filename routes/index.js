/**
 * También puedo importar mi libreria así]
 * import { Router } from 'express';
 * const router = Router();
 *
 */

//Nuestro archivo de rutas

const express = require("express");
const router = express.Router();

const userRoute = require("./user"); // importando nuestro routing de User
router.use("/user", userRoute);
//localhost:3000/api/user

module.exports = router;
