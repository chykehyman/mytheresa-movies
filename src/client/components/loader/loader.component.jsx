import { Circles } from "react-loader-spinner";

import "./loader.component.scss";

const LoaderComponent = ({ message }) => {
  return (
    <div className="loader">
      <Circles className="loader-icon" />

      {message && <p className="loader-text">{message}</p>}
    </div>
  );
};

export default LoaderComponent;
