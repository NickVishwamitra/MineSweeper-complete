import Card from "../../Layout/Card";
import "./Minesweeper.css";
import { useState, useEffect, Fragment } from "react";
import React from "react";
import Squares from "./Components/Squares";

const Minesweeper = (props: { className: any; selectedButton: number }) => {
  const [selectedMineNumButton, setSelectedMineNumButton] = useState(
    props.selectedButton
  );

  return (
    <Card className={`board ${props.className}`}>
      <Squares
        className="allSquares"
        selectedMineNumButton={selectedMineNumButton}
        props={props}
      ></Squares>
    </Card>
  );
};

export default Minesweeper;
