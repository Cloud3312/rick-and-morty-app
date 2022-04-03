import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filter/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

const App = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData; //data de la api desestructurada
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  //obtengo toda la data de la api
  useEffect(() => {
    const getDataFromAPI = async () => {
      const data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    };
    getDataFromAPI();
  }, [api]);

  // useEffect(() => {
  //   (async function () {
  //     const data = await fetch(api).then((res) => res.json());
  //     setFetchedData(data);
  //   })();
  // }, [api]);

  return (
    <>
      <div className="App">
        <h1 className="ubuntu title">
          Rick & Morty <span className="text-primary">Wiki</span>
        </h1>

        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Filters />
            </div>
            <div className="col-8">
              <div className="row">
                <Cards results={results} />
              </div>
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
};

export default App;
