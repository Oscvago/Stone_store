const express = require("express")
const router = express.Router();

// Traer respuesta json del controlador
const {getProducts} = require("../controllers/productsController");

// Ruta en navegador para consutar producto
router.route('/productos').get(getProducts)

module.exports = router;