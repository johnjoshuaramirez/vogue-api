const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true }
});

module.exports = mongoose.model("CartItem", cartItemSchema);
