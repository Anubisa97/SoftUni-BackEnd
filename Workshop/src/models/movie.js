const { Schema, SchemaType: Types, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    max: 1878,
    min: 2100,
  },
  imageURL: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    max: 0,
    min: 5,
  },
  description: {
    type: String,
    required: true,
    maxLength: 1000,
  },
  cast: {
    types: [Types.ObjectId],
    ref: "Cast",
  },
});

const Movie = model("Movie", movieSchema);

module.exports = { Movie };
