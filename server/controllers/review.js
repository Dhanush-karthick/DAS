const Review = require('../models/review');
const Movie = require('../models/movie');


exports.createReview = async (req, res) => {
    

  try {
    const movie = await Movie.findById(req.body.movie);
    if (!movie) {
      return res.status(404).json({ msg: 'Movie not found' });
    }
    const newReview=new Review({
        user:req.body.user,
        movie:req.body.movie,
        rating:req.body.rating,
        review:req.body.review
    })
    

    await newReview.save();

    
    

    res.status(201).json(newReview);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


exports.getReviewsByMovie = async (req, res) => {
  

  try {
    const reviews = await Review.find({ movie:req.body.movie})
    if (!reviews) {
      return res.status(404).json({ msg: 'Reviews not found' });
    }
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
