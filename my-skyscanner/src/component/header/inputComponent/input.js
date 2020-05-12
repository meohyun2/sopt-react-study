import React,{useState,useContext} from 'react';
import styled from 'styled-components';
import {SearchContext} from '../../../store/search-store';
const searchPlace = require('../../../api/searchPlace');

const StyledInput = styled.input`
  margin:20px;
  flex:1;
`;

const Input = (props) => {

  const _onChange = (e) => {
    props.setInfo(e.target.value);
  }

  return(
      <StyledInput placeholder={props.placeholder} onChange = {_onChange}></StyledInput>
  );
}

export default Input;