import "./loader.component.scss";
import React from "react";
import { Circles } from "react-loader-spinner";

const LoaderComponent = ({ message }) => {
  return (
    <div className="loader">
      <Circles className="loader-icon" />

      {message && <p className="loader-text">{message}</p>}
    </div>
  );
};

export default LoaderComponent;
