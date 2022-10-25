import Product from "../models/Product"
//CRUD

//Crear productos
export const createProduct = async (req, res) => {
    const {name, category, price, imageURL } =req.body

    const newProduct = new Product({name, category, price, imageURL});

    const productSave = await newProduct.save()

    res.status(201).json(productSave)

}
// Obtener todos los productos
export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}
// Obtener un producto en específico
export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productById);
    res.status(200).json(product)
    
}
//Carga la actualización de los productos o los elimina
export const updateProductById =  async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json(updatedProduct)
    
}
//Eliminar productos
export const deleteProductById = async (req, res) => {
   const {productId} = req.params;
   await Product.findByIdAndDelete(productId)
   res.status(204).json()   
}