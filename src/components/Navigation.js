import React from "react";
import Home from "../views/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
