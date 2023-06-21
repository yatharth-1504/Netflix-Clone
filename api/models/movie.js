const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: "string",
    img: "string",
    image_title: "string",
    image_sm: "string",
    video: "string",
    trailer: "string",
    year: "string",
    limit: Number,
    is_series: { type: Boolean, default: false },
    genre: "string",
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
