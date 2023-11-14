import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, Box, Text, Heading, useToast } from '@chakra-ui/react';

import { fetchMovieReviews } from 'services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        toast({
          title: 'Error fetching reviews',
          description: 'Try again later',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    };

    movieReviews();
  }, [movieId, toast]);

  if (!reviews) {
    return;
  }

  return (
    <Box mt={10}>
      <Heading as="h2" size="lg" color="green.400" mb={4}>
        Reviews
      </Heading>
      {reviews.length === 0 ? (
        <Text>Sorry, we have not found any review.</Text>
      ) : (
        reviews.map(({ id, author, content }) => (
          <Card key={id}>
            <CardBody>
              <Text py="1" fontSize="xs" fontWeight={700}>
                {author}
              </Text>
              <Text py="1" fontSize="xs">
                {content}
              </Text>
            </CardBody>
          </Card>
        ))
      )}
    </Box>
  );
};

export default Reviews;
