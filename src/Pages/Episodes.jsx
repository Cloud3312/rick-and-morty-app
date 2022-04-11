import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";
import "./Episodes.css";

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState({});
  let { name, air_date } = info;
  let [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  console.log(info);

  useEffect(() => {
    let getEpisodesFromAPI = async () => {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let characters = await Promise.all(
        data.characters.map((character) => {
          return fetch(character).then((res) => res.json());
        })
      );
      setResults(characters);
    };
    getEpisodesFromAPI();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center ">
          Episode:{" "}
          <span className="text-primary">{name ? name : "Unkown"}</span>
        </h1>
        <h5 className="text-center mb-4 ">
          Air Date: {air_date ? air_date : "Unkown"}
        </h5>
      </div>

      <div className="row">
        <div className="col-3">
          <h4 className="centered">Pick Episodes</h4>
          <InputGroup name="Episode" total={51} setID={setID} />
        </div>

        <div className="col-8">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
