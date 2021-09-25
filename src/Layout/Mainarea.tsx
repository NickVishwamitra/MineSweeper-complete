import Card from "./Card";
import "./Background.css";
import Minesweeper from "../Components/Minesweeper/Minesweeper";
import { useEffect, useState, createContext, Fragment } from "react";
import ButtonContainer from "./ButtonContainer";
import React from "react";
import BetPlacing from "../Components/BetPlacing/BetPlacing";
import Cashout from "../Components/LeftSide/Cashout";
// import ChancePercent from "../Components/LeftSide/ChancePercent";
import LeftSide from "../Components/LeftSide/LeftSide";
import ChancePercent from "../Components/LeftSide/ChancePercent";
const Mainarea = (props: any) => {
  return (
    <Card className="mainarea">
      <Fragment>
        <LeftSide />
        <Minesweeper className="gameboard"></Minesweeper>
        <ButtonContainer></ButtonContainer>
        <BetPlacing />
      </Fragment>
    </Card>
  );
};

export default Mainarea;
