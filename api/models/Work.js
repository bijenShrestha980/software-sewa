const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    sn: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Work", WorkSchema);
