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

router.get('/', getAllMovies);
router.post('/', createMovie);
router.get('/top-rated', getTopRatedMovies);
router.get('/lowest-rated', getLowestRatedMovies);
router.get('/most-recent', getMostRecentMovies);
router.get('/oldest', getOldestMovies);
router.get('/:id', getMovieById);
module.exports = router;
