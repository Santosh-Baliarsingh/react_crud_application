import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, viewUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4000/users/${id}`);

    viewUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <h2 className="text-center">User Data</h2>
      <div className="container d-flex justify-content-center">
        <ul className="list-group border shadow w-75">
          <li className="list-group-item">
            <h3><span className="text-danger">User ID</span> - {user.id}</h3>
          </li>
          <li className="list-group-item">
            <h3><span className="text-danger">Full Name</span> - {user.name}</h3>
          </li>
          <li className="list-group-item">
            <h3><span className="text-danger">UserName</span> - {user.username}</h3>
          </li>
          <li className="list-group-item">
            <h3><span className="text-danger">Email ID</span> - {user.email}</h3>
          </li>
          <li className="list-group-item">
            <h3><span className="text-danger">Phone Number</span> - {user.phone}</h3>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center mt-3">
      <Link to="/" className="btn btn-success">Back to Home</Link>

      </div>
    </>
  );
}
