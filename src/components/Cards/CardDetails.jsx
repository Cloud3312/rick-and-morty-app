import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let [fetchedData, setFetchedData] = useState([]);
  let { name, image, location, origin, species, status, type } = fetchedData;
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
      <div className="">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default CardDetails;
