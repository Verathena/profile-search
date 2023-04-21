import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import { profileData } from "./ProfileData.js";
import "../styles/Homepage.css";

const Homepage = () => {
  const [userDetails] = useState(profileData);
  const [searchQuery, setSearchQuery] = useState(profileData);
  console.log(profileData);

  return (
    <div>
      <SearchBar userDetails={userDetails} setSearchQuery={setSearchQuery} />
      <Cards searchQuery={searchQuery} />
    </div>
  );
};

export default Homepage;
