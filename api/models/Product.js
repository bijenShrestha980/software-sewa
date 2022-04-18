const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: Array, required: true },
    img: { type: Array },
    bannerImg: { type: String },
    categories: { type: Array },
    price: { type: Number, required: true },
    feature: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
