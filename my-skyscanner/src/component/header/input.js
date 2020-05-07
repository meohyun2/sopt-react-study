import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display:grid;
`;

const StyledInput = styled.input`
  margin:auto;
`;

const Input = () => {
  return(
    <Div>
      <StyledInput>
      </StyledInput>
    </Div>
  );
}

export default Input;