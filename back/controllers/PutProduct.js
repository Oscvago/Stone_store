const Cart = require("../model/Cart");

const putProduct = async (req, res) => {
    const { productId } = req.params;
    const { query } = req.query;
    const body = req.body;

    //Buscar producto en el carro
    const wantedProduct = await Cart.findById(productId);

    //Si no añaden o borran
    if (!query){
        res.status(400).json({ message: "Please, submit a query"});

        //agregar más productos
    } else if (wantedProduct && query === "add") {
        body.amount = body.amount +1;

        await Cart.findByIdAndUpdate(productId, body, {
            new: true,
        }).then((product) => {
            res.json({
                message: `The product ${product.name} was updated`, //Por favor ayudarme a poner el símbolo bien porque no sé como poner las comillas adecuadas en mi pc
                product,
            });
        });

        //Sacar un producto del carrito
    } else if (wantedProduct && query === "del"){
        body.amount = body.amount -1;

        await Cart.findByIdAndUpdate(productId, body, {
            new: true,
        }).then((product) => {
            res.json({
                message: `The product ${product.name} was updated`, //Por favor ayudarme a poner el símbolo bien porque no sé como poner las comillas adecuadas en mi pc
                product,
            });
        });
    } else {
        res.status(400).json({ message: "An error occurred"});
    }
};

module.exports = putProduct;