import React from "react";
import "../styles/App.scss";

const Layout = ({ children }) => {
  return <div className="layout__wrapper ">{children}</div>;
};

export default Layout;
