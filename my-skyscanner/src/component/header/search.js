import React from 'react';
import Input from './input';
import Button from './button';
import styled from 'styled-components';

const Div = styled.div`
`;

const Search = () => {
  return(
    <Div>
      <Input/>
      <Button/>
    </Div>
  );
}

export default Search;