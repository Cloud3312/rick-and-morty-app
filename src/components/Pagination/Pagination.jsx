import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // let prev = () => {
  //   setPageNumber((prev) => (pageNumber > 1 ? prev + 1 : pageNumber));
  // };

  // let next = () => {
  //   setPageNumber((prev) => prev + 1);
  // };
  // my-5 represent a margin top y bottom, mx-5 es margin left y right
  //data representa la pagina actual, pero se le suma 1 porque arranca desde 0 y no de 1
  return (
    <>
      <ReactPaginate
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        className="pagination justify-content-center gap-4 my-4"
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-primary"
        previousClassName="btn btn-primary"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        onPageChange={(data) => {
          console.log(data);
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
