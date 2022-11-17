const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors")
const cors =require("cors");
app.use(express.json());
app.use(cors());

// Import Routes
const products = require("./routes/products");
const users = require("./routes/auth")
const ventas = require("./routes/ventas")

// Browser path, modify object by view request
app.use("/api", products);
app.use("/api", users);
app.use("/api", ventas);

//MiddleWare to handle errors
app.use(errorMiddleware)

module.exports = app;