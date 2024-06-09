const { Movie } = require("../models/movie");

async function getAllMovies() {
  const movies = await Movie.find().lean();
  return movies;
}

async function getMovieById(id) {

  const movie = await Movie.findById(id).lean()
  return movie
}

async function createMovie(movieData) {
  const movie = new Movie({
    title: movieData.title,
    genre: movieData.genre,
    director: movieData.director,
    year: Number(movieData.year),
    rating: Number(movieData.rating),
    imageURL: movieData.imageURL,
    description: movieData.description,
    cast: []
  });

await movie.save()

  return movie
}


module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
};
