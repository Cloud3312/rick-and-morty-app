import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let [fetchedData, setFetchedData] = useState([]);
  let { name, image, location, origin, species, status, type, gender } =
    fetchedData;
  let { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  console.log(fetchedData);
  useEffect(() => {
    const getDataFromAPI = async () => {
      const data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    };
    getDataFromAPI();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center fw-bold">{name}</h1>
        <img src={image} alt="" className="img-fluid" />
        <div className="content ">
          <div className="">
            <span className="fw-bold">Gender:</span> {gender}
          </div>
          <div className="">
            <span className="fw-bold">Specie:</span> {species}
          </div>

          <div className="">
            <span className="fw-bold">Type:</span> {type ? type : "Unkown"}
          </div>
          <div className="">
            <span className="fw-bold">Location:</span> {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin:</span> {origin?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
