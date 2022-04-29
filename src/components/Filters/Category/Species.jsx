import React from "react";
import { FilterBtn } from "../FilterBtn";

const Species = ({ setSpecies, setPageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronoenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-1">
          {species.map((items, index) => (
            <FilterBtn
              setPageNumber={setPageNumber}
              key={index}
              name="species"
              index={index}
              items={items}
              task={setSpecies}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
// en vez del default, se hace con {} para que todo el
// team lo importe de la misma forma
export { Species };
