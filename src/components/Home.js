import React, { useEffect, useState } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:4000/users");
    setUsers(result.data);
  };
  return (
    <>
      <div className="container-fluid table-responsive ">
        <table className="table my-3 border rounded shadow table-bordered table-hover">
          <thead className="table-dark text-center">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user) => (
              <tr className="fw-bold" key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button className="btn btn-outline-primary">
                    <i className="bi bi-eye"></i>
                  </button>
                  <button className="btn btn-outline-success ms-2">
                    <i className="bi bi-pen"></i>
                  </button>
                  <button className="btn btn-outline-danger ms-2">
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
