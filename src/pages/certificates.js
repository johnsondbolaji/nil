import React from "react";
import "./page.css";
import Cert from "./Cert";
import ErrorBoundary from "../Components/ErrorBoundary";

const Certificates = () => {
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>My Certificates</h1>
      <ErrorBoundary>{<Cert />}</ErrorBoundary>
    </div>
  );
};

export default Certificates;
