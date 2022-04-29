import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CardDetails } from "./components/Cards/CardDetails";
import { Cards } from "./components/Cards/Cards";
import { Filters } from "./components/Filters/Filters";
import { Navbar } from "./components/Navbar/Navbar";
import { Pagination } from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";
import { Episodes } from "./Pages/Episodes";
import { Location } from "./Pages/Location";
const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/locations/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
};

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState(""); //Dead,Alive,Unknown
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData; //data de la api desestructurada
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
        <h1 className="text-center mb-4 mt-3 title-weight">Characters</h1>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
        <div className="container">
          <div className="row">
            <Filters
              setSpecies={setSpecies}
              setStatus={setStatus}
              setPageNumber={setPageNumber}
              setGender={setGender}
            />

            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards page="/" results={results} />
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
// en vez del default, se hace con {} para que todo el
// team lo importe de la misma forma
export { App };
