const app = require("./app");
const connectDatabase = require("./config/databaseConfig");

// Cofiguracion ruta dotenv
const dotenv = require("dotenv");
dotenv.config({path: "back/config/config.env"})

// Llamado base de datos
connectDatabase();

// funcion de conexion
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})

