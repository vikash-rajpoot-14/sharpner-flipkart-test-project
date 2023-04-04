const express = require("express");
const controller = require("./../controller/productController");
const router = express.Router();

router
  .route("/products")
  .post(controller.postProduct)
  .get(controller.getProducts);

router.route("/products/:id").delete(controller.deleteProduct);
module.exports = router;
