const express = require("express")
const router = express.Router();

// Traer respuesta json del controlador
const {getProducts, newProduct} = require("../controllers/productsController");

// Ruta en navegador para consutar producto
router.route('/productos').get(getProducts)
// Ruta en navegador para ccrear un producto
router.route('/productos/nuevo').post(newProduct);

module.exports = router;