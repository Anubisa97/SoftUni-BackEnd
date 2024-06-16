const { getAllMovies, getMovieById } = require("../services/movie");

module.exports = {
  home: async (req, res) => {
    const movies = await getAllMovies();
    res.render("home", { movies });
  },

  details: async (req, res) => {
    const id = req.params.id;
    const movie = await getMovieById(id);

    if (!movie) {
      return res.render("404");
    }

    movie.starRating = "&#x2605; ".repeat(movie.rating);

    res.render("details", { movie });
  },

  search: async (req, res) => {
    const movies = await getAllMovies();
    res.render("search", { movies });
  },
};
