import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Search.scss";

export const Search = ({ search, setSearch }) => {
  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <div className="search__container">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="search__input"
        onChange={(evt) => handleChange(evt)}
        value={search}
      />
      <button className="search__button">
        <SearchOutlinedIcon />
      </button>
    </div>
  );
};
