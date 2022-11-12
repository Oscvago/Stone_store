const express = require('express')
const router = express.Router();
const {getVentas} = require("../controllers/ventasController")

router.route("/ventas").get(getVentas)

module.exports = router;