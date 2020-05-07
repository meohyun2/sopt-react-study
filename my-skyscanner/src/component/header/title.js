import React from 'react';
import styled from 'styled-components';
import Search from './search';

const Div = styled.div`
`;

const StyleTitle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Title = () => {

  return(
    <Div>
      <StyleTitle>
          Search quotes which are cheapest flights.
      </StyleTitle>
      <Search/>
    </Div>
  );
}

export default Title;