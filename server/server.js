const express = require('express')

const app = express()

const mongoose = require('mongoose')
mongoose
    .connect(('mongodb://localhost/stone-store'))
    .then(() => console.log('conectado a db'))

const Producto = require('./Models/Product.model')

const cors = require('cors')
app.use(cors())

app.get('/api/productos', (req,res) => {
    Producto
        .find()
        .then(allProductos => res.json(allProductos))
})

app.get('/api/productos/:producto_id', (req,res) => {
    const {producto_id} = req.params
    Producto
        .findById(producto_id)
        .then(producto => res.send(producto))
})

app.listen(5006, () => console.log('Servidor levantado'))