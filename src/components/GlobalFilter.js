import React from "react";
import "./GlobalFilter.css";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="search-container">
      <span className="search">
        <input
          className="search-text"
          placeholder="Global Search"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
  );
};

export default GlobalFilter;
