const producto = require("../models/productos");

// Ver el listado de productos
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success:true,
        message: "Lista de consulta de productos"
    })
}

// Funcion para crear producto
exports.newProduct = async(req, res, next) => {
    const product = await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}
