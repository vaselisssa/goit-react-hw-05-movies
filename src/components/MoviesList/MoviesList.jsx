import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { BiSolidCameraMovie } from 'react-icons/bi';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <ListIcon as={BiSolidCameraMovie} color="white" />
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default MoviesList;
