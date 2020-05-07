import React, { useContext } from 'react';
import {SearchContext} from '../../store/search-store';

const SearchResult = () => {

  const [trash,setTrash] = useContext(SearchContext);

  console.log(trash);

  return (
    <div>
      <p>{trash}</p>
    </div>
  )
}

export default SearchResult;