import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem } from '@chakra-ui/react';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default MoviesList;
