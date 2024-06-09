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
  imageUrk: {
    type: String,
    required: true,
  },
  movie: {
    type: Types.ObjectId,
    ref: "Movie",
  },
});

const Cast = model("Cast", castSchema);

module.exports = { Cast };
