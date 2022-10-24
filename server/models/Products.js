const { Schema, model } = require("mongoose");

const Product = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: Array,
      default: [],
    },

    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = model("Product", Product);
