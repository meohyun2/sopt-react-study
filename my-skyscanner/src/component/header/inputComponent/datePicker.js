import React,{useState} from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';

const DatetimePicker = (props) => {

  const[searchDate,setSearchDate] = useState();

  const _onChange = (e) => {
    setSearchDate(e);
    const date = e.toISOString().slice(0,10);
    props.setInfo(date);
    console.log(date);
  }

  return(
    <div>
      <DatePicker value={searchDate} onChange={_onChange}></DatePicker>
    </div>
  );
}

export default DatetimePicker;