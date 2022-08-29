import React from "react";
import ButtonHome from "../components/ButtonHome";

const Error = () => {
  return (
    <div className="error__container">
      <ButtonHome />
      <img
        className="img__error"
        src="https://cdn.pixabay.com/photo/2018/01/16/10/36/mistake-3085712_960_720.jpg"
        alt="error"
      />
    </div>
  );
};

export default Error;
