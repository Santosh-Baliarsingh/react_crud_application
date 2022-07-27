import React, { useState } from "react";

export default function AddUser() {

    let initialData = {

        id : 'null',
        name :"",
        username : "",
        email : "",
        phone: "",
    };

    const [user , setUser] = useState(initialData);

    const {id , name , email , phone , username} = user;

    const onInputChange = (e) =>{

        setUser({...user,[e.target.name]:[e.target.value]})
    };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <h2 className="text-center">User Registration Form</h2>
          <div className="col-md-6 offset-md-3 border shadow rounded p-4 m-2">
            <div className="mb-2">
              <label className="form-label fw-bold">
                Enter User ID
              </label>
              <input
                type="number"
                value={id}
                name="id"
                className="form-control"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label className="form-label fw-bold">
                Enter Full Name
              </label>
              <input
                type="text"
                value={name}
                name="name"
                className="form-control"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label className="form-label fw-bold">
                Enter UserName
              </label>
              <input
                type="text"
                value={username}
                name="username"
                className="form-control"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label className="form-label fw-bold">
                Enter Email ID
              </label>
              <input
                type="email"
                value={email}
                name="email"
                className="form-control"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label className="form-label fw-bold">
                Enter Phone No
              </label>
              <input
                type="number"
                value={phone}
                name="phone"
                className="form-control"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="d-flex justify-content-around">
            <button type="submit" className="btn btn-outline-success w-25">
              Submit
            </button>
            <button type="submit" className="btn btn-outline-danger w-25">
              Cancel
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
