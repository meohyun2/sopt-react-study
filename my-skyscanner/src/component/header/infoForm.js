import React,{useState,useReducer} from 'react';
import styled from 'styled-components';
import DatetimePicker from './inputComponent/datePicker';
import Input from './inputComponent/input';
import Button from './button';
import SearchContext from '../../store/search-store';

const Div = styled.div`
  display:grid;
  align-content:center;
  justify-content:center;
`;

const initialState = {
  src:'',
  dest:'',
  outboundDate:'',
  inboundDate:''
} 

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
  const[text,setText] = useState(initialState);

  const _onSubmit = e => {
    e.preventDefault();
    console.log(info);
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
        <Input setInfo={setSrcPlace}>출발</Input>
        <DatetimePicker setInfo={setSrcDate}>출발날짜</DatetimePicker>
        <Input setInfo={setDestPlace}>도착</Input>
        <DatetimePicker setInfo={setDestDate}>도착날짜</DatetimePicker>
        <Button />
      </form>
    </Div>
  );
}

export default InfoForm;