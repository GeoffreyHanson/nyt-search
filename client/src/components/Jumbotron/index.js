import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div
      style={{ textAlign: "center" }}
      // className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
