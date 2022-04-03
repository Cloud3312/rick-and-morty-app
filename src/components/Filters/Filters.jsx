import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import "./Filters.css";

const Filters = ({ setSpecies, setStatus, setPageNumber, setGender }) => {
  let clearFilter = () => {
    setSpecies("");
    setStatus("");
    setPageNumber("");
    setGender("");
    console.log("as");
    window.location.reload();
  };
  return (
    <div className="col-3">
      <div className="text-center fw-bold mb-2">Filter</div>
      <div
        onClick={clearFilter}
        className="pointer text-center text-primary text-decoration-underline text-underline mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filters;
