const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  releaseDate: { type: String, required: true },
  poster: { type: String, required: true },
  rating: { type: String, default: "No rating" },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  director:{type:String,required:true}
});

module.exports = mongoose.model('Movie', MovieSchema);
