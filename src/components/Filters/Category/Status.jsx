import React from "react";
import { FilterBtn } from "../FilterBtn";

const Status = ({ setStatus, setPageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse show"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap">
          {/* si va con {} adentro tiene que estar el return,
          si va solo con (), significa que ya tiene el return implicito
          y solo puede aceptar 1 componente, <FilterBtn/> */}
          {/* {status.map((items, index) => {
            return <FilterBtn />;
          })} */}
          {status.map((items, index) => (
            <FilterBtn
              task={setStatus}
              setPageNumber={setPageNumber}
              key={index}
              name="status"
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
// en vez del default, se hace con {} para que todo el
// team lo importe de la misma forma
// export default Status
export { Status };
