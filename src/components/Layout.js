import React from "react";
import "../styles/App.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout__wrapper" data-testid="layout">
      {children}
    </div>
  );
};

export default Layout;
