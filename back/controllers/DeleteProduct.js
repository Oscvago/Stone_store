const Cart = require("../model/Cart");
const Product = require("../model/Product");

const deleteProduct = async (req, res) => {
    const { productId } = req.params;

    //Buscamos el producto en el carrito
    const productInCart = await Cart.findById(productId);

    //Buscamos el producto en BD según el nombre en que se almacenó en el carrito
    const { name, img, price, _id } = await Product.findOne({
        name: productInCart.name,
    });

    //Buscar y eliminar el producto por id
    await Cart.findByIdAndDelete(productId);

    await Product.findByIdAndUpdate(
        _id,
        { inCart: false, name, img, price },
        { new: true }
    )
    .then((product) => {
        res.json({
            message: `The product ${product.name} was delete of the car`,
        });
    })
    .catch((error) => res.json({ message: "An error occurred"}));
};

module.exports = deleteProduct;