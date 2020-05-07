import React from 'react';
import Title from './title';
import Search from './search';
import styled from 'styled-components';

const Wrapper = styled.section`
    background: papayawhip;
    margin: 2em;
    padding: 1em;
`;

const Header = () =>{
  return(
    <div>
      <Wrapper>
        <Title/>
      </Wrapper>
    </div>
  )
}

export default Header;