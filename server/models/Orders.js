const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    products: {
      //Objeto Producto
      type: Array,
      default: [],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    orderState: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
