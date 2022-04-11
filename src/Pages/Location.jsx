import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";
import "./Location.css";
const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState({});
  let { name, type, dimension } = info;
  let [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    let getEpisodesFromAPI = async () => {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let residents = await Promise.all(
        data.residents.map((character) => {
          return fetch(character).then((res) => res.json());
        })
      );
      setResults(residents);
    };
    getEpisodesFromAPI();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center title-bolder">
          Location:{" "}
          <span className="text-primary">{name ? name : "Unkown"}</span>
        </h1>
        <h5 className="text-center  text-bolder">
          Dimension: {dimension ? dimension : "Unkown"}
        </h5>
        <h6 className="text-center mb-4 text-bolder">
          Type: {type ? type : "Unkown"}
        </h6>
      </div>

      <div className="row">
        <div className="col-3">
          <h4 className="centered">Pick Location</h4>
          {/* total es la cantidad de locations que hay */}
          <InputGroup name="Location" total={126} setID={setID} />
        </div>

        <div className="col-8">
          <div className="row">
            <Cards page="/locations/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
