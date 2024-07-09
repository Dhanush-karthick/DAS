const express = require('express');
const { createReview, getReviewsByMovie } = require('../controllers/review');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createReview);
router.get('/:movieId', getReviewsByMovie);

module.exports = router;
