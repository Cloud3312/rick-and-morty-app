import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // capturo el width del browser
  let [width, setWidth] = useState(window.innerWidth);

  //actualizo el width
  const updateDimension = () => {
    setWidth(window.innerWidth);
  };
  //con esto cada vez que se hace el resize de la window, se guarda
  //el resultado en el width, ya que el efecto aparece cada vez que se
  //mueve algo en el DOM, en este caso el resize de la window.

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

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
        nextClassName="btn btn-primary next"
        previousClassName="btn btn-primary prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 3} //son las paginas que aparecen al lado de los ...
        pageRangeDisplayed={2}
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
