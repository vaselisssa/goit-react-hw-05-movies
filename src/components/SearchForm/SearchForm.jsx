import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { InputGroup, Input, Button, InputRightElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const updateQuery = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateQuery(value);
    setValue('');
  };

  return (
    <InputGroup as="form" size="lg" maxW={480} mb={4} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        autoFocus
        autoComplete="off"
        pr="3.5rem"
        placeholder="Search movies"
        borderColor="green.400"
      />
      <InputRightElement width="3.5rem">
        <Button
          as="button"
          colorScheme="green"
          variant="solid"
          size="sm"
          type="submit"
        >
          <BsSearch fill="white" />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchForm;
