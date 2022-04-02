import React from "react";
import "./Search.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5 ">
      <input
        onChange={(event) => {
          setSearch(event.target.value);
          setPageNumber(1);
        }}
        placeholder="Search for characters"
        type="text"
        className="input "
      />
      {/* fs-5 es font size  */}
      <button
        onClick={(event) => {
          event.preventDefault();
        }}
        className="btn-search btn btn-primary fs-5"
      >
        Search{" "}
      </button>
    </form>
  );
};

export default Search;
