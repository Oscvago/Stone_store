import express from "express";
import morgan from "morgan";
import pkg from "../package.json"


//Módulo Gestor de Uusarios
import {createRoles} from "./libs/initialSetup"

//Enrutador
import productsRoutes from "./routes/products.routes"
import authRoutes from "./routes/auth.routes"
import userRoutes from "./routes/user.routes"

const app = express();
createRoles();

app.set("pkg", pkg); 

//Los usamos para que reconozca el lenguaje
app.use(morgan("dev"));
app.use(express.json());

//Rutas
app.get("/", (req, res) => {
    res.json({
        name: app.get("pkg").name,
        author: app.get("pkg").author,
        description: app.get("pkg").description,
        version: app.get("pkg").version
    })
})

app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;