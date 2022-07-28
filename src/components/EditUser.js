import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let initialData = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };

  let navigate = useNavigate();

  let { id } = useParams();

  const [user, setUser] = useState(initialData);

  const { name, email, phone, username } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4000/users/${id}`);

    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <h2 className="text-center">Edit User Form</h2>
          <div className="col-md-6 offset-md-3 border shadow rounded p-4 m-2">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-2">
                <label className="form-label fw-bold">Enter Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={name}
                  name="name"
                  className="form-control"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label fw-bold">Enter UserName</label>
                <input
                  type="text"
                  placeholder="Enter User Name"
                  value={username}
                  name="username"
                  className="form-control"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label fw-bold">Enter Email ID</label>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  value={email}
                  name="email"
                  className="form-control"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label fw-bold">Enter Phone No</label>
                <input
                  type="text"
                  placeholder="Enter Phone No"
                  value={phone}
                  name="phone"
                  className="form-control"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="d-flex justify-content-around">
                <button type="submit" className="btn btn-outline-success w-25">
                  Update
                </button>
                <Link to='/' className="btn btn-outline-danger w-25">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
