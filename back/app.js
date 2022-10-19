const express = require("express");
const app = express();

app.use(express.json());

// Importacion de rutas
const productos = require("./routes/productsRoute")

// Declaracion de ruta para navegador
app.use('/api', productos)

module.exports = app