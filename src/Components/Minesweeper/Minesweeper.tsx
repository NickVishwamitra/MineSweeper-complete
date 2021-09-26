import Card from "../../Layout/Card";
import "./Minesweeper.css";
import React from "react";
import Squares from "./Components/Squares";

const Minesweeper = (props: any) => {
  return (
    <Card className={`board ${props.className}`}>
      <Squares className="allSquares" props={props}></Squares>
    </Card>
  );
};

export default Minesweeper;
