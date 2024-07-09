const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', ReviewSchema);
 