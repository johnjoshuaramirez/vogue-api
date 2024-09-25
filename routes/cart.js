const express = require("express");
const {
  getAllCartItems,
  addCartItem,
  deleteCartItem,
  incrementCartItem,
  decrementCartItem,
  checkoutOrder
} = require("../controllers/cartController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth)

router.get("/", getAllCartItems)

router.post("/", addCartItem);

router.post("/checkout", checkoutOrder);

router.patch("/increment", incrementCartItem);

router.patch("/decrement", decrementCartItem);

router.delete("/", deleteCartItem);

module.exports = router;
