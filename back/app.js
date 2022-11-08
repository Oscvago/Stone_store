require("dotenv").config();

const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors");

const cors = require("cors");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use(cors());

// Import Routes
const products = require("./routes/products");
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Browser path, modify object by view request
app.use("/api", products);


//MiddleWare to handle errors
app.use(errorMiddleware)

module.exports = app;


