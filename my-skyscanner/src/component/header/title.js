import React from 'react';
import styled from 'styled-components';
import InputForm from './infoForm';

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
    </Div>
  );
}

export default Title;