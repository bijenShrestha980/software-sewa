const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String },
    desc: { type: String },
    img: { type: String },
    facebook: { type: String },
    instagram: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", TeamSchema);
