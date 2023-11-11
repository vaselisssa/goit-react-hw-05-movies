import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <>
      <div>MovieDetails {movieId}</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
