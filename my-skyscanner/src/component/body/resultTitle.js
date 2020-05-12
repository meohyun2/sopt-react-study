import React from 'react';
import styled from 'styled-components';

const StyleTitle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const ResultTitle = () => {

  return(
      <StyleTitle>
        BroseQuote 파싱 결과
      </StyleTitle>
  );
}

export default ResultTitle;