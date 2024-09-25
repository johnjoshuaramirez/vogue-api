const CartItem = require("../models/cartItemModel");
const Order = require("../models/orderModel");

const getAllCartItems = async (req, res) => {
  try {
    const userId = req.user._id;

    const cartItems = await CartItem.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch cart items", err });
  }
};

const checkoutOrder = async (req, res) => {
  const { email, firstName, lastName, address, province, city, phone, order } =
    req.body;

  try {
    const result = await Order.create({
      email,
      firstName,
      lastName,
      address,
      province,
      city,
      phone,
      city,
      order
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Failed to post order", err });
  }
};

const addCartItem = async (req, res) => {
  const { productId, imageUrl, name, price, quantity, color, size } = req.body;

  try {
    // if cart item exists update the quantity
    let existingItem = await CartItem.findOne({ productId, color, size });

    if (existingItem) {
      existingItem.quantity += quantity;

      await existingItem.save();

      return res.status(200).json(existingItem);
    } else {
      // if cart item does not exist add new cart item
      const userId = req.user._id;

      const cartItem = await CartItem.create({
        userId,
        productId,
        imageUrl,
        name,
        price,
        quantity,
        color,
        size
      });

      return res.status(200).json(cartItem);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCartItem = async (req, res) => {
  const { productId, color, size } = req.body;

  try {
    const existingItem = await CartItem.findOneAndDelete({
      productId,
      color,
      size
    });

    if (!existingItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res
      .status(200)
      .json({ message: "Item deleted successfully", item: existingItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const incrementCartItem = async (req, res) => {
  const { productId, color, size } = req.body;

  try {
    let existingItem = await CartItem.findOne({ productId, color, size });

    if (existingItem) {
      existingItem.quantity += 1;

      await existingItem.save();
      return res
        .status(200)
        .json({ message: "Item incremented successfully", item: existingItem });
    } else {
      return res.status(200).json(existingItem);
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const decrementCartItem = async (req, res) => {
  const { productId, color, size } = req.body;

  try {
    let existingItem = await CartItem.findOne({ productId, color, size });

    if (existingItem) {
      existingItem.quantity -= 1;

      await existingItem.save();
      return res
        .status(200)
        .json({ message: "Item decremented successfully", item: existingItem });
    } else {
      return res.status(200).json(existingItem);
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllCartItems,
  checkoutOrder,
  addCartItem,
  deleteCartItem,
  incrementCartItem,
  decrementCartItem
};
