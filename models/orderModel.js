const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, required: true },
  phone: { type: String, required: true },
  order: [
    {
      color: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: String, required: true },
      quantity: { type: Number, required: true },
      size: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model("Order", orderSchema);
