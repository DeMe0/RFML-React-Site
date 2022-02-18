import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Docs from "../pages/Docs";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/docs" element={<Docs />}></Route>
    </Routes>
  );
};

export default Main;
