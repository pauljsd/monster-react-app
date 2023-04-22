import React from "react";
import "./searchbox.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="searching">
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};
