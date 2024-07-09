import React from 'react';
import Movie from './Movie';
import { MDBRow } from 'mdb-react-ui-kit';
import movies from './Data/movieData'; // Adjust the path based on your folder structure
import NoMoviesMessage from './NoMoviesMessage'; // Import the new component

function MovieList({ searchQuery, filterRating, filterCategory }) {
  let filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!filterRating || movie.rating >= filterRating)
  );

  // Apply sorting based on filterCategory
  switch (filterCategory) {
    case 'highestRated':
      filteredMovies = filteredMovies.sort((a, b) => b.rating - a.rating);
      break;
    case 'lowestRated':
      filteredMovies = filteredMovies.sort((a, b) => a.rating - b.rating);
      break;
    case 'mostRecent':
      filteredMovies = filteredMovies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      break;
    case 'oldest':
      filteredMovies = filteredMovies.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
      break;
    default:
      // Default sorting by title if no category filter is applied
      filteredMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  // Limit to top 10 movies after sorting
  if (filterCategory) {
    filteredMovies = filteredMovies.slice(0, 10);
  }

  return (
    <>
      {filteredMovies.length === 0 ? (
        <NoMoviesMessage />
      ) : (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4' id="cardSpacing">
          {filteredMovies.map((movie, index) => (
            <Movie key={index} {...movie} />
          ))}
        </MDBRow>
      )}
    </>
  );
}

export default MovieList;
