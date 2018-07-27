import React from "react";
import loader from "./loader.gif";

export default () => {
  return (
    <div>
      <img
        src={loader}
        alt="Loading"
        stlye={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};
