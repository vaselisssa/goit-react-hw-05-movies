import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Box,
  Heading,
  Card,
  Image,
  SimpleGrid,
  CardBody,
  Text,
} from '@chakra-ui/react';

import { fetchMovieCast } from 'services/Api';
import defaultPhoto from 'images/default_photo.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieCast();
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <Box mt={10}>
      <Heading as="h2" size="lg" color="green.400" mb={4}>
        Movie Cast
      </Heading>
      <SimpleGrid minChildWidth={180} spacing={8}>
        {cast.map(actor => (
          <Card key={actor.id} boxShadow="dark-lg" rounded="md">
            <Image
              src={
                actor.profile_path === null
                  ? defaultPhoto
                  : `https://image.tmdb.org/t/p/w300${actor.profile_path}`
              }
              alt={actor.original_name}
              objectFit="cover"
              h={300}
              borderTopRadius="md"
            />
            <CardBody p={4} textAlign="center">
              <Text py="2" fontSize="sm" fontWeight={700}>
                {actor.name}
              </Text>
              <Text py="2" fontSize="sm">
                Character: {actor.character}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Cast;
