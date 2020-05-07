import React,{createContext,useState} from 'react';

export const SearchContext = createContext();

const initialValue = {
  code:0,
  json:{
    // Result after parsed
  },
  message:''
};

export const SearchProvider = (props) => {

  const [searchData,setSearchData] = useState("스토어의 초깃값을 전달하였습니다.");
  
  return(
    <SearchContext.Provider value = {[searchData,setSearchData]}>
      {props.children}
    </SearchContext.Provider>
  )
}
