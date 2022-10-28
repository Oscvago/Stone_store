const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    descripcion: String,
    categoria: String,
    ancho: Number,
    largo: Number,
    color: String,
    tags: String,
    imageUrl: String,
    precio: Number,
    stock: Number
})

const Producto = mongoose.model('producto', productoSchema)

module.exports = Producto