import "./alertComp.css";
import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const AlertComp = ({message, status}) => {
  return (
    <>
      <Alert status={`${status}`}>
        <AlertIcon />
        <AlertTitle></AlertTitle>
        <AlertDescription>
        {`${message}`}
        </AlertDescription>
      </Alert>
    </>
  );
};

export default AlertComp;
