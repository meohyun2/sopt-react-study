import React,{useState,useReducer,useContext} from 'react';
import styled from 'styled-components';
import DatetimePicker from './inputComponent/datePicker';
import Input from './inputComponent/input';
import Button from './button';
import {SearchContext} from '../../store/search-store';

const searchPlace = require('../../api/searchPlace');
const getQuote = require('../../api/getQuote');

const Div = styled.div`
  display:flex;
  flex-direction:left;
  align-content:center;
  justify-content:center;
  text-align:left;
`;

const initialState = {
  src:'',
  dest:'',
  outboundDate:'',
  inboundDate:''
};

const infoReducer = (state,action) => {
  switch(action.type){
    case 'srcPlace': {
      return {...state, src: action.srcPlace}
    }
    case 'destPlace': {
      return {...state, dest: action.destPlace}
    }
    case 'outDate' : {
      return {...state, outboundDate: action.outDate}
    }
    case 'inDate' : {
      return {...state, inboundDate: action.inDate}
    }
  }
}

const InfoForm = () => {

  const[info,setInfo] = useReducer(infoReducer,initialState);
  const[searchData,setSearchData] = useContext(SearchContext);

  const _onSubmit = async ele => {
    ele.preventDefault();
    //searchPlace로 공항 번호 탐색
    let srcIata, destIata;
    srcIata = await searchPlace(info.src);
    destIata = await searchPlace(info.dest);
    console.log('submit 누름',srcIata);
    console.log('submit 누름',destIata);
    // getQuote 호출

    const result = await getQuote({
      src: srcIata.message.PlaceID,
      dest: destIata.message.PlaceID,
      inboundDate: info.inboundDate,
      outboundDate: info.outboundDate
    });

    setSearchData(result);
  }
  const setSrcPlace = (value) =>{
    setInfo({type:'srcPlace', srcPlace:value});
  }
  const setSrcDate = (value) =>{
    setInfo({type:'outDate', outDate:value});
  }
  const setDestPlace = (value) =>{
    setInfo({type:'destPlace', destPlace:value});
  }
  const setDestDate = (value) =>{
    setInfo({type:'inDate', inDate:value});
  }

  return(
    <Div>
      <form onSubmit={_onSubmit} >
        <Input setInfo={setSrcPlace} placeholder="출발지"></Input>
        <DatetimePicker setInfo={setSrcDate}>출발날짜</DatetimePicker>
        <Input setInfo={setDestPlace} placeholder="도착지"></Input>
        <DatetimePicker setInfo={setDestDate}>도착날짜</DatetimePicker>
        <Button />
      </form>
    </Div>
  );
}

export default InfoForm;