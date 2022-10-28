import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

//Create
router.post("/", async (req, res) => {

    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(err);
    }

})

//Update
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true} );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(err);
    }

})

//Delete
router.delete("/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("El producto ha sido eliminado exitosamente");
    } catch (error) {
        res.status(500).json(err);
    }

})

//Get
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById( req.params.id );
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(err);
    }

})

//Get All
router.get("/", async (req, res) => {
    try {
        const products = await Product.find( req.params.id );
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(err);
    }

});



export default router