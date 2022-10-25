//Crear productos, tener productos o eliminar productos (CRUD)
import { Router } from "express";
const router = Router()
//Importación de router a controller
import *as productsCtrl from "../controllers/products.controller"

import {authJwt} from "../middlewares"

//Crear producto
router.post("/", [authJwt.verifyToken, authJwt.isAdmin ], productsCtrl.createProduct);
//Retener todos los productos juntos
router.get("/", productsCtrl.getProducts);
//Obtener un solo producto por id
router.get("/:productId", productsCtrl.getProductById);
//Actualizar
router.put("/:productId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isOperario], productsCtrl.updateProductById);
//Eliminar
router.delete("/:productId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isOperario], productsCtrl.deleteProductById);

export default router;