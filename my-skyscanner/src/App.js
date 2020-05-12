import React from 'react';
import Header from './component/header/header';
import SearchResult from './component/body/search-result';
import {SearchProvider} from './store/search-store';


function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Header/>
        <SearchResult/>
      </div>
    </SearchProvider>
  );
}

export default App;
