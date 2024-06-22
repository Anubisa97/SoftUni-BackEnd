const { Schema, SchemaType: Types, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: [5, 'Title must be at least 5 character long'],
    match: [/^[a-z0-9 ]+$/gi, 'Title may only contain English letters, numbers and spaces']
  },
  genre: {
    type: String,
    required: true,
    maxLength: [5, 'Title must be at least 5 character long'],
    match: [/^[a-z0-9 ]+$/gi, 'Title may only contain English letters, numbers and spaces']
  },
  director: {
    type: String,
    required: true,
    maxLength: [5, 'Title must be at least 5 character long'],
    match: [/^[a-z0-9 ]+$/gi, 'Title may only contain English letters, numbers and spaces']
  },
  year: {
    type: Number,
    required: true,
    min: 1878,
    max: 2100,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  description: {
    type: String,
    required: true,
    minLength: [20, 'Title must be at least 20 character long'],
    maxLength: 1000,
    match: [/^[a-z0-9 ]+$/gi, 'Title may only contain English letters, numbers and spaces']

  },
  imageURL: {
    type: String,
    required: true,
    match: /^https?:\/\/.+/,
  },
  cast: {
    type: [Types.ObjectId],
    ref: "Cast",
    default: [],
  },
  author: {
    type: [Types.ObjectId],
    ref: "User",
  },
});

const Movie = model("Movie", movieSchema);

module.exports = { Movie };
