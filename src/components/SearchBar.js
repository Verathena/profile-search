import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ userDetails, setSearchQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    if (!e.target.value) {
      setSearchQuery(userDetails);
    }

    const filteredData = userDetails.filter(function (data) {
      return (
        data.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.firstName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        data.lastName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setSearchQuery(filteredData);
  };

  return (
    <div className="searchbar--wrap">
      <form>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={handleSearch}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default SearchBar;
