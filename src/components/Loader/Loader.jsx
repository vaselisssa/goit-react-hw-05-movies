import { Spinner, Center } from '@chakra-ui/react';
import React from 'react';

const Loader = () => (
  <Center h="full">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="gray.500"
      size="xl"
    />
  </Center>
);

export default Loader;
