import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    Category: String,
    Price: Number,
    imgURL: String
}, {
    //Datos con fechas de creación y actualización
    timestamps: true,
    versionKey: false
})

export default model("Product", productSchema);