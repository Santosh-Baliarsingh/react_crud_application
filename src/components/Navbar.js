import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 position-sticky top-0">
        <div className="container-fluid">
          <Link className="nav-link active fw-bold text-light " to="/">
            <span className="h4">React CRUD Application</span>
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div  id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ms-2">
                <NavLink className="nav-link  fw-bold text-light" to="/home">
                  Home
                </NavLink>
              </li>
            </ul> */}
            <div className="d-flex">
              <Link className="btn btn-outline-light" to="/adduser" type="submit">
              <i className="bi bi-person-plus me-2"></i>
                AddUser
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
