import React from "react";

const Pagination = ({ setPageNumber, pageNumber }) => {
  let prev = () => {
    setPageNumber((prev) => (pageNumber > 1 ? prev + 1 : pageNumber));
  };

  let next = () => {
    setPageNumber((prev) => prev + 1);
  };
  // my-5 represent a margin top y bottom, mx-5 es margin left y right
  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={prev} className="btn btn-primary">
        Prev
      </button>
      <button onClick={next} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Pagination;
