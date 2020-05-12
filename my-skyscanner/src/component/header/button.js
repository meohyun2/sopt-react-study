import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
  flex:1;
  width:100px; height:80;
  margin:10px;
  margin-top:30px;
  background : palevioletred;
  color : white;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = (props) => {
  return(
      <StyledButton>
        Search
      </StyledButton>
  );
}

export default Button;