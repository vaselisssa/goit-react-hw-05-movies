import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container, Text, useToast } from '@chakra-ui/react';

import { handleSearch } from 'services/Api';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const toast = useToast();

  const movieName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!movieName) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await handleSearch(movieName);
        setSearchMovies(response);
      } catch (error) {
        toast({
          title: 'Error fetching movie',
          description: 'Try again later',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    };
    fetchData();
  }, [movieName, toast]);

  return (
    <Box as="main" w="100%" h="100%" bgColor="green.100">
      <Container maxW="100%" p={4}>
        <SearchForm />
        {movieName === '' ? (
          ''
        ) : searchMovies && searchMovies.length === 0 ? (
          <Text>
            Sorry, we have not found any movies matching your query "{movieName}
            ".
          </Text>
        ) : (
          <MoviesList movies={searchMovies} />
        )}
      </Container>
    </Box>
  );
};

export default Movies;
