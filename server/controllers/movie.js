const Movie = require('../models/movie');


exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const { name, releaseDate, poster, rating } = req.body;
    const movie = new Movie({ name, releaseDate, poster, rating });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTopRatedMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ rating: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLowestRatedMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ rating: 1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMostRecentMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ releaseDate: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOldestMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({releaseDate:1});
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
