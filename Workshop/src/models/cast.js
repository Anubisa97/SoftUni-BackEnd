const { Schema, SchemaType: Types, model } = require("mongoose");

const castSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    max: 300,
    min: 0,
  },
  born: {
    type: String,
    required: true,
  },
  nameInMovie: {
    type: String,
    required: true,
  },
  castImage: {
    type: String,
    required: true,
  },
  movie: {
    types: [Types.ObjectId],
    ref: "Movie",
  },
});

const Cast = move("Cast", castSchema);

module.exports = { Movie };
