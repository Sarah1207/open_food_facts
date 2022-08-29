import React from "react";
import Home from "../views/Home";
import Product from "../views/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="product/:image_url/:product_name/:categories/:ingredients_text/:allergens_imported/:id"
          element={<Product />}
        />
      </Routes>
    </Router>
  );
};

export default Navigation;
