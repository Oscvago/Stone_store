const { model, Schema } = require("mongoose");

//Amount es la cantidad del producto requerido...
const CartSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true,
    },
    ammount: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = model("Cart", CartSchema);