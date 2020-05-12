import React,{createContext,useState} from 'react';

export const SearchContext = createContext();

const initialState = {
  src:'',
  dest:'',
  outboundDate:'',
  inboundDate:''
} 

export const SearchProvider = (props) => {

  const [searchData,setSearchData] = useState();
  
  return(
    <SearchContext.Provider value = {[searchData,setSearchData]}>
      {props.children}
    </SearchContext.Provider>
  )
}
