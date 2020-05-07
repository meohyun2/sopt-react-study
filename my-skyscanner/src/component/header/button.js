import styled from 'styled-components';
import React from 'react';

const Div = styled.div`
  display:grid;
`;

const StyledButton = styled.button`
  width:100px;height:80;
  margin:auto;
  margin-top:30px;
  background : palevioletred;
  color : white;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Button = () => {
  return(
    <Div>
      <StyledButton>
        Search
      </StyledButton>
    </Div>
  );
}

export default Button;