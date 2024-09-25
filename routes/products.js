const express = require("express");
const {
  addProduct,
  getProducts,
  getTrendingProducts,
  getProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/trending", getTrendingProducts);

router.get("/:id", getProduct);

router.get("/", getProducts);

router.post("/", addProduct);

module.exports = router;
