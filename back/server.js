const app = require("./app");

// Cofiguracion ruta dotenv
const dotenv = require("dotenv");
dotenv.config({path: "back/config/config.env"})

// funcion de conexion
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})

