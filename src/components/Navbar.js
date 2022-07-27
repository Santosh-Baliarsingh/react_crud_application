import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 position-sticky top-0">
        <div className="container-fluid">
          <Link className="nav-link active fw-bold text-light " to="/">
            <p className="h4">React <span className="text-warning">CRUD</span> Application</p>
          </Link>
          <div  id="navbarSupportedContent">
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
