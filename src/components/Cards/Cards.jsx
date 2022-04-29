import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((result) => {
      let { id, name, image, location, status } = result;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 mb-4 position-relative textDecoration"
        >
          {/* col-lg-4 significa que en pantallas mayores o iguales  a large 
          va a ocupar 4 columnas 
          fw =  font-weight
          fs = font-size
          mb = margin-bottom
          */}
          <div className="cardBorder flexImage">
            <img src={image} className={`${`imagem`} img-fluid`} alt="" />
            <div className="p-2">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div>
                <div className="fs-6 ">Last location </div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          <div className={`${`badge`} position-absolute badge ${status}`}>
            {status}
          </div>
        </Link>
      );
    });
  } else {
    display = "No characters Found";
  }
  return <>{display}</>;
};
// en vez del default, se hace con {} para que todo el
// team lo importe de la misma forma
export { Cards };
