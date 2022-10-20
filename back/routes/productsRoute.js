const express = require("express")
const router = express.Router();

// Traer respuesta json del controlador
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController");

// Ruta en navegador para consutar producto
router.route('/productos').get(getProducts);
// Ruta en navegador para consutar producto por id
router.route('/productos/:id').get(getProductById);
// Ruta en navegador para crear un producto
router.route('/productos/nuevo').post(newProduct);
// Ruta en navegador para editar un producto
router.route('/productos/:id').put(updateProduct);
// Ruta en navegador para eliminar un producto
router.route('/productos/:id').delete(deleteProduct);

module.exports = router;