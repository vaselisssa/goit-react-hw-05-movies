import React, { useEffect, useState } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { fetchTrendingMovies } from 'services/Api';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box as="main" w="100%" minH="max-content" bgColor="green.100">
      <Container maxW="100%" p={4}>
        <Heading as="h1" size="lg" color="green.400" mb={4}>
          Trending movies:
        </Heading>
        <Box color="green.900" pl={8}>
          <MoviesList movies={trendingMovies} />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
