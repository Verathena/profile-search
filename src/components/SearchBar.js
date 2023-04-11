import React from 'react';
import "../styles/SearchBar.css";
// import Cards from './Cards';
// import { profileData } from "./ProfileData";


const SearchBar = () => {

  return (
    <div className='searchbar--wrap'>
        <form>
            <input type='text' placeholder="Search by name..."/>
        </form>
    </div>
  )
}

export default SearchBar