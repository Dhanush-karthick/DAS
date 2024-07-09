const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  poster: { type: String, required: true },
  rating: { type: String, default: "No rating" },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Movie', MovieSchema);
