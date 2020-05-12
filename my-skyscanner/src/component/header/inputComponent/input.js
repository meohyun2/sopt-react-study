import React,{useState,useContext} from 'react';
import styled from 'styled-components';
import {SearchContext} from '../../../store/search-store';
const searchPlace = require('../../../api/searchPlace');

const Div = styled.div`
  display:grid;
  float:left;
`;

const StyledInput = styled.input`
  margin:auto;
`;

const Input = (props) => {

  const _onChange = (e) => {
    console.log(e.target.value);
    props.setInfo(e.target.value);
  }

  return(
    <Div>
      <input onChange = {_onChange}></input>
    </Div>
  );
}

export default Input;