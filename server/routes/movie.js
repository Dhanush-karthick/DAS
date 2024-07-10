const express = require('express');
const {
  getAllMovies,
  getMovieById,
  createMovie,
  getTopRatedMovies,
  getLowestRatedMovies,
  getMostRecentMovies,
  getOldestMovies
} = require('../controllers/movie');

const router = express.Router();

router.get('/all', getAllMovies);
router.post('/', createMovie);
router.get('/top-rated', getTopRatedMovies);
router.get('/lowest-rated', getLowestRatedMovies);
router.get('/most-recent', getMostRecentMovies);
router.get('/oldest', getOldestMovies);

module.exports = router;
