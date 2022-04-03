import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand ">
          Rick & Morty <span className="text-primary">Wiki</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          {/* activeClassName usa el .active de css, NavLink permite tener una opcion 
          que muestre un elemento que esta seleccionado */}
          <div className="navbar-nav fs-5">
            <NavLink
              activeClassName="active"
              to="/"
              className="nav-item nav-link "
            >
              Characters
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/episodes"
              className="nav-item nav-link "
            >
              Episodes
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/locations"
              className="nav-item nav-link "
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
