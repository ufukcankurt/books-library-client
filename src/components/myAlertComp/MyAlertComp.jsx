import "./myAlertComp.css";
import React, { useEffect, useRef } from "react";
import { CheckCircle, Error } from "@material-ui/icons";

const MyAlertComp = ({ message, danger, setIsVisible }) => {
  const alertRef = useRef();

  useEffect(() => {
    setTimeout(() => {
        setIsVisible(false)
    }, 3000);
  }, []);

  const MyComponent = () => {
    return (
      <div
        className="myAlertCompContainer"
        ref={alertRef}
        style={{ color: danger ? "#FED7D7" : "c6f6d5" }}
      >
        {danger ? (
          <Error htmlColor={danger ? "#E53E3E" : "#38A169"} />
        ) : (
          <CheckCircle htmlColor={danger ? "#E53E3E" : "#38A169"} />
        )}
        <p className="myAlertMessage">{message}</p>
      </div>
    );
  };

  return (
    <>
      <MyComponent />
    </>
  );
};

export default MyAlertComp;
