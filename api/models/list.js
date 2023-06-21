const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: { type: "string", required: true },
    type: "string",
    genre: "string",
    content: { type: Array },
  },
  { timestamps: true }
);

const List = mongoose.Model("List", listSchema);

module.exports = List;
