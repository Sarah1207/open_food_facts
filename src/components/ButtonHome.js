import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonHome = () => {
  const navigate = useNavigate();
  return (
    <button
      className="button button__back"
      onClick={() => {
        navigate("/", { replace: true });
      }}
    >
      Back Home
    </button>
  );
};

export default ButtonHome;
