const autoRoutes = require("./routs/auto");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();


app.use(express.json());
app.use("/auto", autoRoutes);


mongoose.connect(process.env.MongoDB_uri)
.then(()=> console.log("Conexion exitosa"))
.catch((Error)=> console.error(Error));

app.listen(8080, ()=> console.log("hola"));