const Cart = require("../model/Cart");

const getProductsCar = async(req, res) => {
    const productsCart = await Cart.find();

    if ( productsCart ) {
        res.json({ productsCart});
    } else {
        res.json({ message: "Not product in the car" });
    }
};

module.exports = getProductsCar;