import React from 'react';
import Title from './title';
import InputForm from './infoForm';
import styled from 'styled-components';

const Wrapper = styled.section`
    background: papayawhip;
    margin: 2em;
    padding: 1em;
    display:grid;
`;

const Header = () =>{
  return(
    <div>
      <Wrapper>
        <Title/>
        <InputForm/>
      </Wrapper>
    </div>
  )
}

export default Header;