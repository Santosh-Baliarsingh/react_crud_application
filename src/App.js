import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";




function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/adduser" element={<AddUser/>}></Route>
      <Route exact path="/edituser/:id" element={<EditUser/>}></Route>
      <Route exact path="/viewuser/:id" element={<ViewUser/>}></Route>
    </Routes>
    </>
  );
}

export default App;
