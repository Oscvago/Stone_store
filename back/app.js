const express = require("express");
const app = express();
<<<<<<< HEAD
const errorMiddleware = require("./middleware/errors")

app.use(express.json());

// Import Routes
const products = require("./routes/products");
const users = require("./routes/auth")

// Browser path, modify object by view request
app.use("/api", products);
app.use("/api", users);

//MiddleWare to handle errors
app.use(errorMiddleware)

module.exports = app;


=======

app.use(express.json());

// Importacion de rutas
const productos = require("./routes/productsRoute")

// Declaracion de ruta para navegador
app.use('/api', productos)

module.exports = app
>>>>>>> 4934fdf95e4744cfa83a7bd70011ae0878f4b5b3
