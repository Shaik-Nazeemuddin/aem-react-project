import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";


const MainWrapper = () => {
  return (
    <div className="homepage-wrapper">
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
  );
};

export default MainWrapper;
