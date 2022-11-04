require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middleware/errors")

app.use(express.json());

// Import Routes
const products = require("./routes/products");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// Browser path, modify object by view request
app.use("/api", products);
//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//middlewares
app.use(express.json());
app.use(cors());

//MiddleWare to handle errors
app.use(errorMiddleware)

module.exports = app;


