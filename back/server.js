<<<<<<< HEAD
const app = require("./app")
const connectDataBase = require("./config/database");

// Set file config
const dotenv = require("dotenv");
dotenv.config({path: 'back/config/config.env'})

// Config DB
// connectDataBase({path: 'back/config/config.env'})
connectDataBase()

// Call to sever
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT} in mode: ${process.env.NODE_ENV}`)
})
=======
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

>>>>>>> 4934fdf95e4744cfa83a7bd70011ae0878f4b5b3
