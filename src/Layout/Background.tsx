import "./Background.css";
import Mainarea from "./Mainarea";
import React from "react";
//Create background contaioner and set to 100vh 100vw to create 100% scale for children components
const Background = (props: any) => {
  return (
    <div className="background">
      <Mainarea></Mainarea>
    </div>
  );
};

export default Background;
