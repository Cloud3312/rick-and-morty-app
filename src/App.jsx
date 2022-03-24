import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filter/Filters";

const App = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData; //data de la api
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}",`;

  //obtengo toda la data de la api
  useEffect(() => {
    let getDataFromAPI = async () => {
      let data = await fetch(api).then((res) => {
        res.json();
        setFetchedData(data);
      });
    };
  }, [api]);
  return (
    <>
      <div className="App">
        <h1 className="ubuntu title">
          Rick & Morty <span className="text-primary">Wiki</span>
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-3">
              <Filters />
            </div>
            <div className="col-8">
              <div className="row">
                <Cards />
                <Cards />
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
