import React from 'react';
import SearchBar from './SearchBar';
import Cards from './Cards';


import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div>
        <SearchBar />
        <Cards />
    </div>
  )
}

export default Homepage