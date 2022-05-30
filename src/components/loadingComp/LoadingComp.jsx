import "./loadingComp.css";
import React from "react";

const LoadingComp = ({w, h, button}) => {

  const ButtonLoadingComp = () => {
    return (
      <div className="loader-wrapperButton" >
        <div className="loader">
          <div className="loader loader-inner"></div>
        </div>
      </div>
    )
  }

  const NormalLoadingComp = () => {
    return (
      <div className="loader-wrapper" >
        <div className="loader">
          <div className="loader loader-inner"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="loadingCompContainer">
      {button ? <ButtonLoadingComp /> : <NormalLoadingComp />}
    </div>
  );
};

export default LoadingComp;
