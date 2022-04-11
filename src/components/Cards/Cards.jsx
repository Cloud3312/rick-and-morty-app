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
          className="col-4 mb-4 position-relative textDecoration"
        >
          <div className="cardBorder">
            <img src={image} className={`${`imagem`} img-fluid`} alt="" />
            <div className="content">
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

export default Cards;
