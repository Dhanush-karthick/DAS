import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import { MDBRow } from 'mdb-react-ui-kit';
import axios from 'axios';
import { moviesData } from './Data/movieData';
import NoMoviesMessage from './NoMoviesMessage';

function MovieList({ searchQuery, filterRating, filterCategory }) {
  const [movies, setMovies] = useState(moviesData);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("all");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiData = await getMovie();
        setMovies(apiData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [sort]);

  useEffect(() => {
    switch (filterCategory) {
      case 'All movies':
        setSort("all");
        setMovies([]);
        break;
      case 'highestRated':
        setSort("top-rated");
        setMovies([]);
        break;
      case 'lowestRated':
        setSort("lowest-rated");
        setMovies([]);
        break;
      case 'mostRecent':
        setSort("most-recent");
        setMovies([]);
        break;
      case 'oldest':
        setSort("oldest");
        setMovies([]);
        break;
      default:
        setSort("all");
        setMovies([]);
        break;
    }
  }, [filterCategory]);

  const getMovie = async () => {
    const options = {
      method: 'GET',
      url: `https://das-server-s7sb.onrender.com/api/movies/${sort}`,
      headers: {
        accept: 'application/json',
      },
    };
    
    try {
      console.log('Request URL:', options.url); // Log the URL
      const response = await axios.request(options);
      return response.data;
    } catch (err) {
      console.error('Error fetching movies:', err); // Log the error
      return [];
    }
  };

  if (loading) {
    return <div style={{ color: "black" ,fontSize:"30px"}}>Loading...</div>;

  }

  let filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!filterRating || movie.rating >= filterRating)
  );

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
