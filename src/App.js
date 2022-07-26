import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";




function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/adduser" element={<AddUser/>}></Route>
    </Routes>
    </>
  );
}

export default App;
