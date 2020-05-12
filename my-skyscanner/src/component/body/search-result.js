import React, { useContext,useState,useEffect } from 'react';
import {SearchContext} from '../../store/search-store';
import styled from 'styled-components';
import ResultTitle from './resultTitle';

const Div = styled.div`
  background: papayawhip;
  margin: 2em;
  padding: 1em;
  display:grid;
  justify-content:center;
  align-items:center;
`;

const SearchResult = () => {

  const [trash,setTrash] = useContext(SearchContext);
  const [data, setData] =useState(trash);

  useEffect(()=>{
    setData(trash);
    console.log(JSON.stringify(trash));
  },[trash])

  console.log(trash);

  return (
    <Div>
      <ResultTitle/>
      <p>{JSON.stringify(data)}</p>
    </Div>
  )
}

export default SearchResult;