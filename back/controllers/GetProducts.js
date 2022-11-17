const Product = require ("../model/Product");

const getProducts = async (req, res) => {
    const products = await Product.find();

    if (products){
        res.json({ products });
    } else {
        res.json({ message: "Not there products "});
    }
};

module.exports = getProducts;