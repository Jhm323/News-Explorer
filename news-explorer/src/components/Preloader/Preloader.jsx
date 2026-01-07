import React from "react";
import "./Preloader.css";

const Preloader = React.memo(() => {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <div className="preloader__spinner">
          <div className="preloader__circle"></div>
        </div>
        <p className="preloader__text">Searching for news...</p>
      </div>
    </div>
  );
});

Preloader.displayName = "Preloader";

export default Preloader;
