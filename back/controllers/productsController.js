<<<<<<< HEAD
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/products");
const ErrorHandler = require("../utils/errorHandler");
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url)); //Usurpación del require

// View All Products --> /api/products
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await producto.find();

  if (!products) {
    return next(new ErrorHandler("Product not found", 404))

  }

  res.status(200).json({
    success: true,
    count: products.length,
    products
  })
})

// =======================================================================================================

// View product by ID --> /api/product/id
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404))

  }

  res.status(200).json({
    success: true,
    message: "Product reference found: ",
    product
  })
})

// =======================================================================================================

// Add a new product --> /api/product/new
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.create(req.body);

  res.status(201).json({
    success: true,
    product
  })
})

// =======================================================================================================

// Update product --> /api/product/id

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await producto.findById(req.params.id)

  // Validation 1: The product exists? --> NOT
  if (!product) {
    return next(new ErrorHandler("Product not found", 404))
  }

  // Validation 2: The product exists? --> YES --> Validate only new or updated attributes
  producto = await producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  // Answer option: The product has been successfully updated
  res.status(200).json({
    success: true,
    message: "Product upgraded successfully",
    product
  })
})

// =======================================================================================================

// Delete product --> /api/product/id

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.findById(req.params.id);

  // Validation 1: The product exists? --> NOT
  if (!product) {
    return next(new ErrorHandler("Product not found", 404))
  }

  // Validation 2: The product exists? --> YES --> Answer Option: The product has been successfully removed
  await producto.remove()
    res.status(200).json({
      success: true,
      message: "Product removed successfully"
    })
})

// =======================================================================================================

// View All Products - FETCH

function viewProducts() {
    fetch("http://localhost:4000/api/products")
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))
}

//viewProducts(); Invoke the created method to test the query.

//View by ID
function viewProductById(id) {
    fetch("http://localhost:4000/api/product/" + id)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))
}

// //viewProductById('63456a8d9163cb9dbbcaa235'); method test
=======
const producto = require("../models/productos");

// Truco para importar fetch como funcion
const fetch = (url) => import ('node-fetch').then(({default: fetch}) => fetch(url)); 

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

// LLAMADOS CON FECTH TODOS Y POR ID
function verProdductos () {
    fetch ('http://localhost:4000/api/productos')
    .then (res => res.json ())
    .then (res => console.log(res))
    .catch (err => console.error (err))
}
// verProdductos();

// Consulta de producto fetch por id
function verProdductosId (id) {
    fetch ('http://localhost:4000/api/productos'+id)
    .then (res => res.json ())
    .then (res => console.log(res))
    .catch (err => console.error (err))
}
//verProdductosId('635094576eff36b92c5aa3d0');
>>>>>>> 4934fdf95e4744cfa83a7bd70011ae0878f4b5b3
