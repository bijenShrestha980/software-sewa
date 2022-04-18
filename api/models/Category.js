const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: Array },
    categories: { type: Array },
    feature: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
