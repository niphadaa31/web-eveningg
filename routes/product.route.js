//ເອີ້ນໃຊ້ງານໂມດູນ express
const express = require("express")
const { getAllProducts } = require("../controllers/product.controller")

//ເອີ້ນໃຊ້ເຣົ້າເຕີ້
const router = express.Router()

//ສ້າງendpoint
router.route("/").get(getAllProducts)

//ສົ່ງອອກໂມດູນທີ່ຊື້ວ່າ router
module.exports = router
