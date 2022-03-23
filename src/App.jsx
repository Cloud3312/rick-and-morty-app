import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filter/Filters";

function App() {
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
}

export default App;
