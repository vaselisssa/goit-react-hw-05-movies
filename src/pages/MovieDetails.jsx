import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import {
  Box,
  Container,
  Button,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  useToast,
} from '@chakra-ui/react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { FaMasksTheater, FaScroll } from 'react-icons/fa6';

import { fetchMovieDetails } from 'services/Api';
import Loader from 'components/Loader';
import defaultPoster from 'images/default_poster.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state || '/');
  const toast = useToast();

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
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

    movieDetails();
  }, [movieId, toast]);

  if (!movieDetails) {
    return;
  }

  const userScore = Math.round(movieDetails.vote_average * 10);
  const genresList = movieDetails?.genres?.map(genre => genre.name).join(', ');

  return (
    <Box as="main" w="100%" minH="100%" bgColor="green.100">
      <Container maxW="100%" p={4}>
        <Link to={backLinkHref.current}>
          <Button
            as="button"
            type="button"
            leftIcon={<RiArrowGoBackLine />}
            colorScheme="green"
            variant="solid"
            h={10}
            w={32}
            mb={4}
          >
            Go back
          </Button>
        </Link>

        <Card
          as="div"
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          boxShadow="xl"
        >
          <Image
            objectFit="cover"
            maxW="100%"
            h={400}
            src={
              movieDetails.poster_path === null
                ? defaultPoster
                : `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            }
            alt={movieDetails.title}
          />

          <Stack>
            <CardBody color="green.700" pb={0}>
              <Heading as="h2" size="md" color="green.400" mb={4}>
                {movieDetails.title}
              </Heading>
              <Text py="2" fontWeight={700} mb={4}>
                User score: {userScore}%
              </Text>
              <Heading size="sm" color="green.500">
                Overview
              </Heading>
              <Text py="2" mb={4} fontSize="sm">
                {movieDetails.overview}
              </Text>
              <Heading size="sm" color="green.500">
                Genres
              </Heading>
              <Text py="2">
                {genresList !== '' ? genresList : 'No genres provided'}
              </Text>
            </CardBody>

            <CardFooter pt={0}>
              <Button
                as={Link}
                to="cast"
                leftIcon={<FaMasksTheater />}
                colorScheme="green"
                variant="solid"
                h={10}
                w={32}
                mr={2}
              >
                Cast
              </Button>
              <Button
                as={Link}
                to="reviews"
                leftIcon={<FaScroll />}
                colorScheme="green"
                variant="solid"
                h={10}
                w={32}
              >
                Reviews
              </Button>
            </CardFooter>
          </Stack>
        </Card>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
};

export default MovieDetails;
