import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, useToast } from '@chakra-ui/react';
import { fetchTrendingMovies } from 'services/Api';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
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
  }, [toast]);

  return (
    <Box as="main" w="100%" h="100%" bgColor="green.100">
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
