exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success:true,
        message: "Lista de consulta de productos"
    })
}