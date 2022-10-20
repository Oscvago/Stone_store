const producto = require("../models/productos");

// Ver el listado de productos
exports.getProducts = async (req, res, next) => {
    const productos = await producto.find();
    res.status(200).json ({
        success: true,
        cantidad: productos.length,
        productos
    })
}

// Consultar producto por Id
exports.getProductById = async (req, res, next) => {
    const productoId = await producto.findById(req.params.id)
    if (!productoId) {
        return res.status(404).json ({
            success: false,
            message: "Producto no encontrado"
        })
    }
    res.status(200).json ({
        success: true,
        message: "Informacion de producto:",
        productoId
    })
}

// Funcion para actualizar un producto
exports.updateProduct = async (req, res, next) => {
    let productoId = await producto.findById(req.params.id)
    if (!productoId) {
        return res.status(404).json ({
            success: false,
            message: "Producto no encontrado"
        })
    }
    productoId = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json ({
        success: true,
        message: "Actualizacion de producto exitosa",
        productoId // si no funciona intentar con producto
    })
}

// Funcion para crear producto
exports.newProduct = async (req, res, next) => {
    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}

// Funcion para eliminar un producto
exports.deleteProduct = async (req, res, next) => {
    let productoId = await producto.findById(req.params.id)
    if (!productoId) {
        return res.status(404).json ({
            success: false,
            message: "Producto no encontrado"
        })
    }

    await productoId.remove();
    res.status(200).json({
        success: true,
        message: "Eliminacion de producto exitosa"
    })
}
