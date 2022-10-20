const mongoose = require("mongoose");

const productosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Debe registrar un nombre de producto."],
        trim: true,
        maxLength: [120, "Maximo 120 carateres."]
    },
    unidadDeMedida: {
        type: String,
        required: [true, "Debe registrar la unidad de medida de producto."],
        trim: true,
        maxLength: [20, "Maximo 20 carateres."]
    },
    precio: {
        type: Number,
        required: [true, "Debe registrar un precio de producto."],
        maxLength: [8, "Valor maximo $ 99.999.999"],
        default: 0.0
    },
    descripcion: {
        type: String,
        required: [true, "Debe registrar una descripcion del producto."]
    },
    calificacion: {
        type: Number,
        default: 0
    },
    imagen: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],
    categoria: {
        type: String,
        required: [true, "Debe seleccionar una categoria del producto."],
        enum: {
            values: [
                "Pisos",
                "Cocina",
                "Baño",
                "Decorativos"
            ]
        }
    },
    vendedor: {
        type: String,
        required: [true, "Debe registrar un vendedor."]
    },
    inventario: {
        type: Number,
        required: [true, "Debe registrar stock de producto disponible."],
        maxLength: [8, "Cantidad maxima permitida 99.999"],
        default: 0
    },
    numCalificaciones: {
        type: Number,
        default: 0
    },
    opiniones: [
        {
            nombreCliente:{
                type: String,
                required: true,
            },
            rating:{
                type: Number,
                required: true,
            },
            comentario: {
                type: String,
                required: true
            }
        }
    ],
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("productos", productosSchema);