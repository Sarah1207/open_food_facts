import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Product from "../views/Product";
import Error from "../views/Error";

const Navigation = () => {
  return (
    <div data-testid="router">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="product/:image_url/:product_name/:categories/:ingredients_text/:allergens_imported/:id"
            element={<Product />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
