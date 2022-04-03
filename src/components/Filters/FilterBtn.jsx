import React from "react";
import "./FilterBtn.css";

const FilterBtn = ({ setPageNumber, items, task, name, index }) => {
  return (
    <div>
      {/* este es el papa de los filtros, status, species,gender */}
      <div className="form-check">
        <input
          onClick={() => {
            task(items);
            setPageNumber(1);
          }}
          className="form-check-input input-check"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
