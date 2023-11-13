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
  useToast,
} from '@chakra-ui/react';

import { fetchMovieCast } from 'services/Api';
import defaultPhoto from 'images/default_photo.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response);
      } catch (error) {
        toast({
          title: 'Error fetching cast',
          description: 'Try again later',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    };

    movieCast();
  }, [movieId, toast]);

  if (!cast) {
    return;
  }

  return (
    <Box mt={10}>
      <Heading as="h2" size="lg" color="green.400" mb={4}>
        Movie Cast
      </Heading>
      <SimpleGrid minChildWidth={180} spacing={8}>
        {cast.map(({ id, profile_path, original_name, name, character }) => (
          <Card key={id} boxShadow="dark-lg" rounded="md">
            <Image
              src={
                profile_path === null
                  ? defaultPhoto
                  : `https://image.tmdb.org/t/p/w300${profile_path}`
              }
              alt={original_name}
              objectFit="cover"
              h={300}
              borderTopRadius="md"
            />
            <CardBody p={4} textAlign="center">
              <Text py="1" fontSize="xs" fontWeight={700}>
                {name}
              </Text>
              <Text py="1" fontSize="xs">
                Character: {character}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Cast;
