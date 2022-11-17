const Cart = require("../model/Cart");
const Product = require("../model/Product");

const addProductCart = async (rec, res) => {
    const { name, img, price } = req.body;  //Aquí se ponen los parámetros de acuerdo a nuestro proyecto

    //Vemos si el producto tiene existencias
    const isInProducts = await Product.findOne({ name });

    //Vemos que todos los campos tengan info
    const fullCart = name !== "" && img !== "" && price !== "";

    //Vemos que el producto esté en el carrito
    const isInCart = await Cart.findOne({ name });

    //Si no hay producto
    if(!isInProducts) {
        res.status(400).json({
            message: "This product is not available",
        });

        //Si nos envían algo que no esta en el carrito lo agregamos
    } else if (fullCart && !inCart) {
        const newProductInCart = new Cart({ name, img, price, amount: 1 });

        //Actualiza a prop inCart: true en nuestros productos

    await Product.findByIdAndUpdate(
        isInProducts?._id,
        { isInCart: true, name, img, price },
        { new: true }
    )
    .then((product)   => {
        newProductInCart.save();
        res.json({
            message: "The product now is on the car",
            product,
        });
    })
    .catch((error) => console.error(error));

    //Si está en el carrito mandamos alerta
    } else if(isInCart){
        res.status(400).json({
            message: "The product is on the car"
        });
    }
};

module.exports = addProductCart;